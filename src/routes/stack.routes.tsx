import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { Button } from "react-native";

import { Welcome } from "../pages/Welcome";
import { VehicleSelect } from "../pages/Home";
import { NewReport } from "../pages/NewReport";
import { MyReports } from "../pages/MyReports";
import { Login } from "../pages/Login";

import colors from "../styles/colors";
import AuthRoutes from "./drawer.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >

    <stackRoutes.Screen name="VehicleSelect" component={VehicleSelect} />
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="NewReport" component={NewReport} />
    <stackRoutes.Screen name="MyReports" component={MyReports} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
