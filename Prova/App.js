import { View, Text, StyleSheet, Button, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.texto}>React Native</Text>
        <Text style={estilos.subtexto}>Avaliação dia 04/09</Text>
      </View>

      <View style={estilos.cetntralizador}>

        <View style={estilos.retangulo}>
          <Text style={estilos.textoRetangulo}>Batatas são macias.</Text>
        </View>

        <View style={estilos.espaco}></View>

        <View style={estilos.botao}>
          <Button title="Enviar" color="#1b1b1aff" onPress={() => { }} />
        </View>

      </View>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({



  areaSegura: {
    flex: 1
  },

  cabecalho: {
    paddingHorizontal: 26,
    paddingTop: 45,
  },

  texto: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtexto: {
    fontSize: 15,
  },

  retangulo: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#8996a8ff",
    borderRadius: 10,
    borderWidth: 1,

  },

  textoRetangulo: {
    fontWeight: 500,
  },

  cetntralizador: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  botao: {
    width: 120,
    backgroundColor: "#37a9ebff",
  },

  espaco: {
    height: 16,
  },









})