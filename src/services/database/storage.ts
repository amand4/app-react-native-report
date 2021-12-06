import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";
import useAsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { View, Alert } from "react-native";


export const save = async (dataKey: string, state: any) => {

    // try {
    //     const laudos = await AsyncStorage.getItem(dataKey);
    //     const currentLaudos = laudos ? JSON.parse(laudos) : [];
    //     await AsyncStorage.setItem(
    //         dataKey,
    //         JSON.stringify([...currentLaudos, state])
    //     );

    // } catch (error) {
    // }
    try {
        const laudos = await AsyncStorage.getItem(dataKey);
        const currentLaudos = laudos ? JSON.parse(laudos) : [];
        const indexFindReport = currentLaudos.findIndex((element: any) => element.LaudoVeicular.id == state.LaudoVeicular.id);
        state.LaudoVeicular.statusDoLaudo.completo = true;
     

        if (indexFindReport != -1) {
            console.log("if")

            currentLaudos[indexFindReport] = state


            await AsyncStorage.setItem(
                dataKey,
                JSON.stringify(currentLaudos)
            );
        } else {
            console.log("else")

            await AsyncStorage.setItem(
                dataKey,
                JSON.stringify([...currentLaudos, state])
            );
        }

        return "sucess"

    } catch (error) {
        Alert.alert("Erro", "Não foi possível cadastrar o laudo");
    }
};

const all = {
    save,
}

export default all;








// export async function loadReport(): Promise<any[]> {

//     const [user, setUser] = useState<any>({} as any);

//     const userStorageKey = "@AppAuth:user";


//     useEffect(() => {
//         async function loadStoragedData() {
//             const storagedUser: any = await useAsyncStorage.getItem(userStorageKey);


//             setUser(JSON.parse(storagedUser));

//         }
//         loadStoragedData()

//     }, []);

//     // const storagedUser = await useAsyncStorage.getItem(userStorageKey);

//     // const { user } = useAuth();
//     try {
//         const dataKey = `@laudos_user:${user.id}`;

//         const data = await AsyncStorage.getItem(dataKey);
//         const plants = data ? (JSON.parse(data) as any) : {};

//         const plantsSorted = Object.keys(plants)
//             .map((plant) => {
//                 return {
//                     ...plants[plant].data,

//                 };
//             })


//         return plantsSorted;
//     } catch (error: any) {
//         throw new Error(error);
//     }
// }

