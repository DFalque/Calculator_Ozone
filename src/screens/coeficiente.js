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
import { Input, Icon, Button, ListItem, Overlay } from "react-native-elements";
import Constants from "expo-constants";

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hogares: [
        {
          id: "h1",
          titulo: "Sala de estar",
          coeficiente: 1.6,
        },
        {
          id: "h2",
          titulo: "Cocina / Cuarto de baño",
          coeficiente: 2,
        },
        {
          id: "h3",
          titulo: "Dormitorio",
          coeficiente: 0.8,
        },
      ],
      oficinas: [
        {
          id: "o1",
          titulo: "Sala de juntas",
          coeficiente: 1.2,
        },
        {
          id: "o2",
          titulo: "Despacho",
          coeficiente: 0.8,
        },
        {
          id: "o3",
          titulo: "Cuarto de baño",
          coeficiente: 2,
        },
      ],
      barRestaurante: [
        {
          id: "b1",
          titulo: "Cocina",
          coeficiente: 3,
        },
        {
          id: "b2",
          titulo: "Comedor público / Baño",
          coeficiente: 2,
        },
        {
          id: "b3",
          titulo: "Cuarto de basura",
          coeficiente: 3,
        },
      ],
      comercios: [
        {
          id: "c1",
          titulo: "Carnicerías",
          coeficiente: 1.2,
        },
        {
          id: "c2",
          titulo: "Pescaderías",
          coeficiente: 5,
        },
        {
          id: "c3",
          titulo: "Pajarerías, sólo pájaros",
          coeficiente: 2,
        },
        {
          id: "c4",
          titulo: "Tienda de animales",
          coeficiente: 3,
        },
        {
          id: "c5",
          titulo: "Comercios en general",
          coeficiente: 1.2,
        },
        {
          id: "c6",
          titulo: "Peluquería",
          coeficiente: 2.5,
        },
        {
          id: "c7",
          titulo: "Guarderías",
          coeficiente: 1.6,
        },
      ],
      discoteca: [
        { id: "d1", titulo: "Pista de baile", coeficiente: 2.5 },
        { id: "d2", titulo: "Cuarto de baño", coeficiente: 2 },
      ],
      recintos: [
        { id: "r1", titulo: "Gimnasios / Baños", coeficiente: 2 },
        { id: "r2", titulo: "Vestuarios", coeficiente: 2.4 },
      ],
      almacenes: [
        {
          id: "a1",
          titulo: "Frutas y verduras (temperatura ambiente)",
          coeficiente: 2,
        },
        {
          id: "a2",
          titulo: "Huevos, pollos (temperatura ambiente)",
          coeficiente: 2.4,
        },
      ],
      industriaAlimentaria: [
        { id: "i1", titulo: "Matadero", coeficiente: 3 },
        { id: "i2", titulo: "Sala de despiece", coeficiente: 2 },
        {
          id: "i3",
          titulo: "Conservación de vegetales y lácteos",
          coeficiente: 2,
        },
        {
          id: "i4",
          titulo: "Zona de empaquetado",
          coeficiente: 1.2,
        },
        {
          id: "i5",
          titulo: "Fábrica de embutidos",
          coeficiente: 2,
        },
        {
          id: "i6",
          titulo: "Triperías",
          coeficiente: 3,
        },
        {
          id: "i7",
          titulo: "Elaboración de derivados de la harina",
          coeficiente: 2,
        },
      ],
      grandesSuperficies: [
        {
          id: "gs1",
          titulo: "Hipermercado y grandes almacenes",
          coeficiente: 1.2,
        },
        {
          id: "gs2",
          titulo: "Bingos",
          coeficiente: 2.4,
        },
      ],
      camarasFirogríficas: [
        {
          id: "f1",
          titulo: "Cárnicas (conservación)",
          coeficiente: 1.2,
        },
        {
          id: "f2",
          titulo: "Curación de embutidos",
          coeficiente: 1.2,
        },
        {
          id: "f3",
          titulo: "Curación de quesos, pesado, naranja",
          coeficiente: 6,
        },
        {
          id: "f4",
          titulo: "Curación de jamones",
          coeficiente: 4,
        },
        {
          id: "f5",
          titulo: "Conservación de bacalao",
          coeficiente: 8,
        },
        {
          id: "f6",
          titulo: "Frutas y verduras",
          coeficiente: 2,
        },
        {
          id: "f7",
          titulo: "Cámaras de restaurantes",
          coeficiente: 2.5,
        },
        {
          id: "f8",
          titulo: "Congelados",
          coeficiente: 2,
        },
      ],
      granjas: [
        {
          id: "g1",
          titulo: "Granja de cerdos y distete precoz",
          coeficiente: 4.5,
        },
        {
          id: "g2",
          titulo: "Cebo de cerdos, conejos",
          coeficiente: 8,
        },
      ],
    };
  }
  render() {
    const { params } = this.props.navigation.state;
    const lugar = this.props.navigation.state.params.e.nombre;
    return (
      <View>
        {lugar == "hogares" ? (
          <View style={styles.pantalla}>
            {this.state.hogares.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "oficinas" ? (
          <View style={styles.pantalla}>
            {this.state.oficinas.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "barRestaurante" ? (
          <View style={styles.pantalla}>
            {this.state.barRestaurante.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "comercios" ? (
          <View style={styles.pantalla}>
            {this.state.comercios.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "discoteca" ? (
          <View style={styles.pantalla}>
            {this.state.discoteca.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "recintos" ? (
          <View style={styles.pantalla}>
            {this.state.recintos.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "almacenes" ? (
          <View style={styles.pantalla}>
            {this.state.almacenes.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "industriaAlimentaria" ? (
          <View style={styles.pantalla}>
            {this.state.industriaAlimentaria.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "grandesSuperficies" ? (
          <View style={styles.pantalla}>
            {this.state.grandesSuperficies.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "camarasFirogríficas" ? (
          <View style={styles.pantalla}>
            {this.state.camarasFirogríficas.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {lugar == "granjas" ? (
          <View style={styles.pantalla}>
            {this.state.granjas.map((e) => (
              <TouchableOpacity
                style={styles.lista}
                key={e.id}
                onPress={() => {
                  params.pasarCoeficiente(e.coeficiente, e.titulo);
                }}
              >
                <View style={styles.titulo}>
                  <Text>{e.titulo}</Text>
                </View>
                <View style={styles.coeficiente}>
                  <Text>{e.coeficiente}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  lista: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFDB49",
    backgroundColor: "white",
    height: "10%",
    width: "100%",
    flexDirection: "row",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pantalla: { height: "100%" },
  titulo: { width: "70%", marginLeft: "10%" },
  coeficiente: { width: "10%", marginRight: "10%" },
});
