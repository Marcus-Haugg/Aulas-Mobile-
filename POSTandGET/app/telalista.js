import { View, Text, StyleSheet, Button, TextInput, FlatList, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

async function getItens() {
  const resposta = await fetch(`http://177.44.248.50:8080/items`)
  if (resposta.ok) {
    const payload = await resposta.json();
    return payload

  };
  return null;
};


async function postItens(name, description, price) {
  const resposta = await fetch(`http://177.44.248.50:8080/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, price }),

  });

  if (resposta.ok) {
      const payload = await resposta.json(); 
      return payload; 
    }else {
      console.error("Erro do servidor:", resposta.status);
      return null; 
    }
};


export default function AulaAPIs() {
  const [listaritem, setListarItem] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function listarItens() {
    const resultado = await getItens();

    if (resultado) {

      setListarItem(resultado);
    } else {

      Alert.alert('ERRO', 'Não foi possível buscar os itens da API.');
      setListarItem([]);
    }
  }

  async function adicionarItem() {
    if (!name || !price) {
      Alert.alert("Erro!", "Nome e preço são obrigatórios");
      return;
    }

    const novoItem = await postItens(name, description, parseFloat(price || 0));

    if (novoItem) {
      Alert.alert("Sucesso", `Item "${novoItem.name}" adicionado!`);
      setName('');
      setDescription('');
      setPrice('');
      listarItens();
    }else{
      Alert.alert("Erro", "Não foi possível adicionar o item.");
    }


  }

  return (
    <SafeAreaView style={estilos.areaSegura}>

      <Text style={estilos.titulo}>Adicionar Novo Item</Text>
        <TextInput
          placeholder="Nome do Item"
          style={estilos.campo}
          value={name}
          onChangeText={setName}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Descrição"
          style={estilos.campo}
          value={description}
          onChangeText={setDescription}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Preço (ex: 19.99)"
          style={estilos.campo}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
        <Button title="Adicionar Item" onPress={adicionarItem} />

      <View style={estilos.container}>
        <Text style={estilos.titulo}>Lista de Itens!</Text>
        <Button title="Buscar Itens" onPress={listarItens} />
      </View>

      <FlatList
        data={listaritem}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={estilos.itemLista}>
            <Text style={estilos.itemNome}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={estilos.itemPreco}>R$ {item.price}</Text>
          </View>)}
      />

    </SafeAreaView>



  )
};

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

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

  lista: {
    width: '100%',
    marginTop: 20,
  },

  itemLista: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },

  itemNome: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemPreco: {
    fontSize: 16,
    color: 'green',
    marginTop: 5
  },

  campo: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});