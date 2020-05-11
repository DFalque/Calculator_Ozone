import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CalcScreen from "../screens/calcScreen";
import ListaScreen from "../screens/listaScreen";
import CoeficienteScreen from "../screens/coeficiente";

const CalcScreenStack = createStackNavigator(
  {
    Calc: {
      screen: CalcScreen,
      navigationOptions: () => ({
        title: "Nivel de Ozono",
      }),
    },
    Select: {
      screen: ListaScreen,
      navigationOptions: () => ({}),
    },
    Coeficiente: {
      screen: CoeficienteScreen,
      navigationOptions: () => ({}),
    },
  },
  {
    initialRouteName: "Calc",
  }
);
const Stack = createAppContainer(CalcScreenStack);

export default Stack;
