import React from "react";
import Routes from "./src/routes";
import { Provider } from "react-redux";
import store from "./src/store";
import { StatusBar } from "react-native";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
}
