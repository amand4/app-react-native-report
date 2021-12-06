import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../hooks/auth";
import StackRoutes from "./stack.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { signed, loading, user } = useAuth();

  return (
    <NavigationContainer>
      {/* objeto = {} esta retorando true, checar o motivo */}
      {user.name ? <StackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
