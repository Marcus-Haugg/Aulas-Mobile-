import { View, Text, StyleSheet, FlatList, TextInput, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";

export default function App() {

  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (texto.trim() == "")
      retur = "ERRO!";
    setLista([...lista, texto]);
    setTexto("")
  };

  function removerItem(){
    setLista(lista.slice(1));
  }


  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.textoPrincipal}>Olá Marcus!</Text>
        <Text style={estilos.subtexto}>Adicione o que desejar a sua Lista!</Text>
      </View>

      <View style={estilos.corpo}>
        <Text>Adicione a sua Lista!</Text>
        <TextInput
          style={estilos.caixaTexto}
          placeholder="Adicione a lista"
          keyboardType="default"
          onChangeText={setTexto}
          value={texto}
          placeholderTextColor="#999" />

      </View>

      <View style={estilos.containerBotao}>
        <View style={estilos.botao}>
          <Button title="Adicionar" onPress={adicionarItem} />
        </View>

        <View style={estilos.botao}>
          <Button title="Excluir" onPress={removerItem} color="#F44336" />
        </View>
      </View>



      <FlatList
        style={{ marginTop: 20, width: "100%" }}
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={estilos.item}>{item}</Text>
        )}
      />









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

  lista: {
    marginTop: 20,
    width: "100%"
  },

  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#ce1414ff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#bd0c0cff",
    fontSize: 16,
  },

  botao: {
    flex: 1,
    marginHorizontal: 5,
  },

  containerBotao: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,

  }


})
