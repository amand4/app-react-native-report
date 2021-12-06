import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Welcome } from "../pages/Welcome";
import { VehicleSelect } from "../pages/Home";
import { MyReports } from "../pages/MyReports";
import { Login } from "../pages/Login";

const drawerRoutes = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <drawerRoutes.Navigator
  // headerMode="none"
  // screenOptions={{
  //   cardStyle: {
  //     backgroundColor: colors.white,
  //   },
  // }}
  >
    <drawerRoutes.Screen name="Login" component={Login} />
    <drawerRoutes.Screen name="Welcome" component={Welcome} />
    <drawerRoutes.Screen name="ChoiceVehicle" component={VehicleSelect} />
    <drawerRoutes.Screen name="MyReports" component={MyReports} />
  </drawerRoutes.Navigator>
);

export default AppRoutes;
