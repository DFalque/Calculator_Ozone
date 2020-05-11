import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CalcScreen from "../screens/calcScreen";
import ListaScreen from "../screens/listaScreen";
import HomeStack from "./calcStack";
import { StackNavigator } from "react-navigation";

const MyStackNavigator = createStackNavigator(
  {
    routeOne: CalcScreen,
    routeTwo: ListaScreen,
  },
  {
    initialRouteName: "routeOne",
  }
);

const MySwitchNavigator = createSwitchNavigator(
  {
    routeOne: CalcScreen,
    routeTwo: ListaScreen,
  },
  { initialRouteName: "routeOne" }
);
export default createAppContainer(MyStackNavigator);
