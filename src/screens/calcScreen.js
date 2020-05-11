import React, { Component, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
} from "react-native";
import { Input, Icon, Button, ListItem, Overlay } from "react-native-elements";

export default class Calc extends Component {
  constructor() {
    super();
    this.cambiarLargo = this.cambiarLargo.bind(this);
    this.cambiarAncho = this.cambiarAncho.bind(this);
    this.cambiarAlto = this.cambiarAlto.bind(this);
    this.cambiarM3 = this.cambiarM3.bind(this);
    this.calcular = this.calcular.bind(this);
    this.cambiarCoeficiente = this.cambiarCoeficiente.bind(this);
    this.state = {
      largo: 0,
      altura: 0,
      ancho: 0,
      m3: 0,
      coeficiente: 0,
      resultado: 0,
      boton: "Escoger Coeficiente",
      texto: "'Escoja un coeficiente'",
    };
  }

  calcular(altura, ancho, largo, coe) {
    const m3 = altura * ancho * largo;

    //const result = m3 * coeficiente;
    this.setState({ m3: m3 });
    if (coe > 0.1 && coe <= 2) {
      const min = m3 * 0.1;
      const horas = min / 60;
      const resultfinal = horas.toFixed(2);
      this.setState({ resultado: resultfinal });
    } else if (coe > 2.1 && coe <= 4) {
      const min = m3 * 0.2;
      const horas = min / 60;
      const resultfinal = horas.toFixed(2);
      this.setState({ resultado: resultfinal });
    } else if (coe > 4.1 && coe <= 6) {
      const min = m3 * 0.3;
      const horas = min / 60;
      const resultfinal = horas.toFixed(2);
      this.setState({ resultado: resultfinal });
    } else if (coe > 6.1 && coe <= 8) {
      const min = m3 * 0.4;
      const horas = min / 60;
      const resultfinal = horas.toFixed(2);
      this.setState({ resultado: resultfinal });
    }
  }

  cambiarDePágina() {
    this.props.navigation.navigate("listaScreen");
  }

  cambiarCoeficiente(c, t) {
    this.props.navigation.navigate("Calc");
    this.setState({ coeficiente: c });
    this.setState({ texto: t });
  }

  cambiarLargo(e) {
    var coma = e.nativeEvent.text;
    var comaBien = coma.replace(/,/g, ".");
    console.log(comaBien);
    this.setState({ largo: comaBien });

    this.cambiarM3(this.state.altura, this.state.ancho, this.state.largo);
  }

  cambiarAncho(e) {
    var coma = e.nativeEvent.text;
    var comaBien = coma.replace(/,/g, ".");
    // coma = e.replace(/[,.]/g, function (m) {
    // m is the match found in the string
    // If `,` is matched return `.`, if `.` matched return `,`
    //    return m === "," ? "." : ",";
    //  });
    this.setState({ ancho: comaBien });
    this.cambiarM3(this.state.altura, this.state.ancho, this.state.largo);
  }

  cambiarAlto(e) {
    var coma = e.nativeEvent.text;
    var comaBien = coma.replace(/,/g, ".");
    this.setState({ altura: comaBien });
    this.cambiarM3(this.state.altura, this.state.ancho, this.state.largo);
  }
  cambiarM3(altura, ancho, largo) {
    const e = altura * ancho * largo;
    this.setState({ m3: e });
  }

  calcularResultado(m3, coeficiente) {
    const r = m3 * coeficiente;
    this.setState({ resultado: r });
  }

  render() {
    const { height, width } = Dimensions.get("window");
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset="-100"
        style={styles.container}
      >
        <View className="containerLogo" style={styles.containerLogo}>
          <Image
            style={styles.logo}
            source={require("../../assets/img/logo.png")}
            resizeMode="contain"
          />
          <View style={styles.contenedorResultado}>
            <Text style={styles.resultado}>{this.state.resultado}</Text>
            <Text> horas</Text>
          </View>
        </View>
        <TouchableWithoutFeedback
          style={styles.containerCalc}
          onPress={Keyboard.dismiss}
        >
          <View style={styles.containerCalc}>
            <Input
              placeholder="Largo"
              inputStyle={styles.signtext}
              containerStyle={styles.signInForm}
              onChange={(e) => this.cambiarLargo(e)}
              rightIcon={
                <Icon
                  type="material-community"
                  name="arrow-expand-right"
                  containerStyle={StyleSheet.rightIcon}
                  color="#AFDB49"
                />
              }
            />
            <Input
              placeholder="Ancho"
              inputStyle={styles.signtext}
              containerStyle={styles.signInForm}
              onChange={(e) => this.cambiarAncho(e)}
              rightIcon={
                <Icon
                  type="material-community"
                  name="arrow-expand-horizontal"
                  containerStyle={StyleSheet.rightIcon}
                  color="#AFDB49"
                />
              }
            />
            <Input
              placeholder="Alto"
              inputStyle={styles.signtext}
              containerStyle={styles.signInForm}
              onChange={(e) => this.cambiarAlto(e)}
              rightIcon={
                <Icon
                  type="material-community"
                  name="arrow-expand-vertical"
                  containerStyle={StyleSheet.rightIcon}
                  color="#AFDB49"
                />
              }
            />
            <TouchableOpacity
              style={styles.lista}
              onPress={() =>
                navigate("Select", { coe: this.cambiarCoeficiente })
              }
            >
              <Text>{this.state.boton}</Text>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
              <Icon
                type="font-awesome"
                name="arrow-circle-right"
                containerStyle={StyleSheet.rightIcon}
                color="#AFDB49"
              />
            </TouchableOpacity>
            <View style={styles.aviso}>
              <Text>Lugar: {this.state.texto}</Text>
            </View>

            <Button
              title="Calcular"
              titleStyle={styles.tituloBoton}
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              onPress={() =>
                this.calcular(
                  this.state.altura,
                  this.state.ancho,
                  this.state.largo,
                  this.state.coeficiente
                )
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  containerLogo: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCalc: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  signInForm: {
    marginBottom: 20,
    width: 200,
    backgroundColor: "rgba(226, 226, 226, 0.25)",
  },
  contenedorBoton: {
    marginBottom: 5,
  },
  btnStyle: {
    backgroundColor: "#AFDB49",
    borderRadius: 40,
  },
  btnContainer: {
    width: 150,
    overflow: "hidden",
  },
  lista: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFDB49",
    backgroundColor: "white",
    width: 200,
    height: 50,
    marginBottom: "2%",
    shadowOpacity: 0.2,
  },
  listaTexto: {
    color: "black",
    marginRight: 100,
  },
  Introduccion: {
    marginBottom: 20,
  },
  tituloBoton: {
    color: "white",
  },
  rightIcon: { marginLeft: 100 },
  aviso: {
    marginBottom: "5%",
    height: 25,
    // backgroundColor: "rgba(226, 226, 226, 0.25)",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFDB49",
  },
  logo: { marginBottom: "10%" },
  resultado: { fontSize: 21 },
  contenedorResultado: {
    backgroundColor: "rgba(226, 226, 226, 0.25)",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFDB49",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
