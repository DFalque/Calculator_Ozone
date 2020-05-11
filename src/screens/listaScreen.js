import React, { Component, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function ShowList() {
  return this.state.laps.map((PRUEBA) => {
    return (
      <View>
        <Text>{PRUEBA.titulo}</Text>
      </View>
    );
  });
}

export default class Lista extends Component {
  constructor() {
    super();
    this.state = {
      PRUEBA: [
        {
          id: "1",
          titulo: "Hogares",
          nombre: "hogares",
        },
        {
          id: "2",
          titulo: "Oficinas",
          nombre: "oficinas",
        },
        { id: "3", titulo: "Bar / Restaurante", nombre: "barRestaurante" },
        { id: "4", titulo: "Comercios", nombre: "comercios" },
        { id: "5", titulo: "Discoteca / Pub", nombre: "discoteca" },
        { id: "6", titulo: "Recintos Deportivos", nombre: "recintos" },
        { id: "7", titulo: "Almacenes", nombre: "almacenes" },
        {
          id: "8",
          titulo: "Industria Alimentaria",
          nombre: "industriaAlimentaria",
        },
        {
          id: "9",
          titulo: "Grandes Superficies",
          nombre: "grandesSuperficies",
        },
        {
          id: "10",
          titulo: "Cámaras Frigoríficas",
          nombre: "camarasFirogríficas",
        },
        { id: "11", titulo: "Granjas", nombre: "granjas" },
      ],
    };
  }
  render() {
    //const cambiarCoeficiente = this.props.navigation.state.params.coe;
    const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.PRUEBA.map((e) => (
          <TouchableOpacity
            key={e.id}
            style={styles.lista}
            onPress={() =>
              navigate("Coeficiente", {
                e,
                pasarCoeficiente: this.props.navigation.state.params.coe,
              })
            }
          >
            <Text>{e.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  lista: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFDB49",
    backgroundColor: "white",
    height: "9.09%",
    width: "100%",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
