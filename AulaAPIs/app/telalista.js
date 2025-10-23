import { View, Text, StyleSheet, Button, TextInput, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState,  } from "react";



export default function AulaAPIs() {



  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.textoPrincipal}>Olá Marcus!</Text>
        <Text style={estilos.subtexto}>Quais são as suas despesas?</Text>

      </View>




    </SafeAreaView>



  )
};

const estilos = StyleSheet.create({

  areaSegura: {
    flex: 1
  },

  cabecalho: {
    paddingHorizontal: 26,
    paddingTop: 5,
  },

  textoPrincipal: {
    fontSize: 25,
    fontWeight: 'bold'
  },

  subtexto: {
    fontSize: 15,
  },

  corpo: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
    marginTop: 30,

  },

  caixaTexto: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderColor: "#444141ff",
    color: "#000"
  },

  linhaEntrada: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8
  },

  campoTexto: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#020202ff",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44
  },

  containerBotao: {
    marginTop: 10,
    gap: 5,
    paddingHorizontal: 10,
  },

  botao: {
    marginHorizontal: 10,
  },

  containerLista: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5
  },

})