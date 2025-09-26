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

function getDespesas() {
  return db.getAllSync('SELECT * FROM despesas');
}

function somaDespesas() {
  const result = db.getAllSync('SELECT SUM(valor)  AS total  FROM despesas');
  result[0]?.total || 0;
}

function insertDespesa(descricao, valor) {
  db.runSync("INSERT INTO despesas (descricao, valor) VALUES (?, ?)", [
    descricao,
    valor,
  ]);
}

function deleteAllDespesas() {
  db.runSync("DELETE FROM despesas");
}




export default function sqlite() {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [despesas, setDespesas] = useState([]);
  const [totalDespesas, setTotalDespesas] = useState(0);

  function Salvar() {
    if (!descricao.trim() || !valor.trim()) return;
    insertDespesa(descricao.trim(), parseFloat(valor));
    setDescricao("");
    setValor("");
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
    const total = totalDespesas();
    setTotalDespesas(total);
    Alert.alert("Total das despesas", "R$ " + total.toFixed(2));
  }


  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.textoPrincipal}>Olá Marcus!</Text>
        <Text style={estilos.subtexto}>Quais são as suas despesas?</Text>

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
        renderItem={({ item }) =>
          <Text style={estilos.subtexto}>
            - {item.descricao} | R$ {item.valor} | {item.total}
          </Text>}
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

})