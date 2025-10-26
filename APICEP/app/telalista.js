import { View, Text, StyleSheet, Button, TextInput, FlatList, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

async function getCEP(cep) {
  const resposta = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
  if (resposta.ok) {
    const payload = await resposta.json();
    return payload

  };
  return null;
}


export default function AulaAPIs() {
  const [dadosCep, setDadosCep] = useState({
    state: '',
    city: '',
    neighborhood: '',
    street: '',
  });
  const [pesquisarCep, setPesquisarCep] = useState('');

  async function carregarCep() {
    const resultado = await getCEP(pesquisarCep);

    if (resultado) {
      setDadosCep({
        state: resultado.state || 'Não encontrado',
        city: resultado.city || 'Não encontrado',
        neighborhood: resultado.neighborhood || 'Não encontrado',
        street: resultado.street || 'Não encontrado',
      });
    } else {
      Alert.alert('ERRO', 'CEP não encontrado ou erro na requisição');
      setDadosCep({
        state: 'Não encontrado',
        city: 'Não encontrado',
        neighborhood: 'Não encontrado',
        street: 'Não encontrado',
      });
    }
  }

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.container}>
        <Text style={estilos.texto}>Buscar Endereço pelo CEP</Text>
      </View>
      <TextInput
        style={estilos.campo}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={pesquisarCep}
        onChangeText={setPesquisarCep}

      />
      <Button title="Pesquisar" onPress={carregarCep} />

      <View style={estilos.resultado}>
        <Text style={estilos.texto}>Estado: {dadosCep.state}</Text>
        <Text style={estilos.texto}>Cidade: {dadosCep.city}</Text>
        <Text style={estilos.texto}>Bairro: {dadosCep.neighborhood}</Text>
        <Text style={estilos.texto}>Rua: {dadosCep.street}</Text>
      </View>







    </SafeAreaView>



  )
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  campo: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    width: "100%",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  resultado: {
    marginTop: 20,
    alignItems: "flex-start",
    width: "100%",
  },
  texto: {
    fontSize: 16,
    marginVertical: 3,
  },
});