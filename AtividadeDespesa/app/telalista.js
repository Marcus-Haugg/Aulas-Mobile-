import { View, Text, StyleSheet, Button, TextInput, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('despesas.db');
db.execSync(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS despesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor NUMERIC NOT NULL
);
`);

try{
  db.execSync (`ALTER TABLE despesas ADD COLUMN categoria TEXT DEFAULT ''`);
}  catch (e) {}

function getDespesas() {
  return db.getAllSync('SELECT * FROM despesas');
}

function insertDespesa(descricao, valor, categoria) {
  db.runSync("INSERT INTO despesas (descricao, valor, categoria) VALUES (?, ?, ?)", [
    descricao,
    valor,
    categoria,
  ]);
}

function getSomaDespesas() {
  const result = db.getAllSync('SELECT SUM(valor)  AS total  FROM despesas');
  return result[0]?.total || 0;
}

function deleteAllDespesas() {
  db.runSync("DELETE FROM despesas");
}

function deleteDespesa(id){
  db.runSync("DELETE FROM despesas WHERE id =?", [id])
}




export default function Sqlite() {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("")
  const [despesas, setDespesas] = useState([]);

  function Salvar() {
    if (!descricao.trim() || !valor.trim() || !categoria.trim()) return;
    insertDespesa(descricao.trim(), parseFloat(valor), categoria.trim());
    setDescricao("");
    setValor("");
    setCategoria("");
    carregarDespesas();
  }
  function carregarDespesas() {
    setDespesas(getDespesas());
  }

  function limparTudo() {
    deleteAllDespesas();
    setDespesas([]);
  }

  function somaDespesas() {
    const total = getSomaDespesas();
    Alert.alert("Total das despesas", "R$ " + total.toFixed(2))
  }

  function excluirDespesa(id) {
     deleteDespesa(id);
    carregarDespesas();
  }


  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.textoPrincipal}>Olá Marcus!</Text>
        <Text style={estilos.subtexto}>Quais são as suas despesas?</Text>

      </View>

       <View style={estilos.linhaEntrada}>
        <TextInput
          value={categoria}
          onChangeText={setCategoria}
          placeholder="Categoria..."
          placeholderTextColor="#999"
          style={estilos.campoTexto} />
      </View>

      <View style={estilos.linhaEntrada}>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descrição..."
          placeholderTextColor="#999"
          style={estilos.campoTexto} />
      </View>

      <View style={estilos.linhaEntrada}>
        <TextInput
          value={valor}
          onChangeText={setValor}
          placeholder="Valor R$"
          keyboardType="numeric"
          placeholderTextColor="#999"
          style={estilos.campoTexto} />
      </View>

      <View style={estilos.containerBotao}>
        <Button title="Salvar despesa" onPress={Salvar} />
        <Button title="Carregar despesas" onPress={carregarDespesas} />
        <Button title="Limpar tudo" onPress={limparTudo} color="#F44336" />
        <Button title="Totalizar despesas" onPress={somaDespesas} color="#4CAF50" />
      </View>

      <FlatList
        data={despesas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) =>(
          <View style={estilos.containerLista}>
            <Text style={estilos.subtexto}>
              -{item.categoria} | {item.descricao} | R$ {item.valor}
            </Text>
             <Button title="X" color="#F44336" onPress={() => excluirDespesa(item.id)} />
          </View>)}
      />



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

  containerLista:{
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 5
},

})