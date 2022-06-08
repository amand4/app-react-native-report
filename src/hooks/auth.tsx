import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { api } from "../services/api";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import useAsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import actions from "../actions/todo";

interface AuthProviderProps {
  children: ReactNode;
}
interface Response {
  token: string;
  user?: User;
}
interface User {
  id: string;
  name: string;
  password: string;
}
interface Tpo {
  id: string;
  name: string;
  password: string;
}
interface CallbackType {
  onError: (value: string) => void;
  onSuccess: (value: Record<string, any>) => void;
}

interface IAuthContextData {
  signed: boolean;
  user: User;
  loading: boolean;
  token: string;
  signIn(name: string, password: string): any;
  signOut(): void;
}
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const userStorageKey = "@AppAuth:user";
  const tokenStorageKey = "@AppAuth:token";

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await useAsyncStorage.getItem(userStorageKey);

      const storagedToken = await useAsyncStorage.getItem("@AppAuth:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);

  // async function signIn(name: string, password: string): Promise<void> {
  const signIn = useCallback(async (name: string, password: string) => {
    try {
      const response = await api.post<Response>("/login", {
        name,
        password,
      });
      if (response.data.user) {
        const { token } = response.data;
        setUser(response.data.user);
        setToken(token);
        dispatch(actions.addExpert(Number(response.data.user.id)));

        api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

        await useAsyncStorage.setItem(
          userStorageKey,
          JSON.stringify(response.data.user)
        );
        await useAsyncStorage.setItem(
          tokenStorageKey,
          JSON.stringify(response.data.token)
        );
      }
    } catch (error) {
      throw new Error(
        "Usário ou senha inválida! Tente novamente com outras credênciais"
      );
    }
  }, []);

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey).then(() => {});
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
