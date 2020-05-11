import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import calcScreenStack from "./calcStack";

// Import the Stacks

// Create the Navigation Stacks, Bottom Tab.

const NavigationStacks = createBottomTabNavigator(
  {
    Calcular: {
      screen: calcScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Calcular",
        tabBarIcon: ({ tintColor }) => (
          <Icon type="font-awesome" name="calculator" color={tintColor} />
        ),
      }),
    },

    Guardado: {
      screen: calcScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Guardado",
        tabBarIcon: ({ tintColor }) => (
          <Icon type="font-awesome" name="folder" color={tintColor} />
        ),
      }),
    },
  },

  {
    initialRouteName: "Calcular",
    order: ["Calcular", "Guardado"],
    tabBarOptions: {
      inactiveTintColor: "#B4B4B4",
      activeTintColor: "#AFDB49",
    },
  }
);

//Export Navigation created

export default createAppContainer(NavigationStacks);
