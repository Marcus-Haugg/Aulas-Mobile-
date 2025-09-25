import { View, Text, StyleSheet,Button} from "react-native";
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

function getDespesas(){
  return db.getAllSync('SELECT * FROM despesas');
}

function insertDespesa(descricao, valor) {
  db.runSync("INSERT INTO despesas (descricao, valor) VALUES (?, ?)", [
    descricao,
    valor,
  ]);
}




export default function sqlite() {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState([]);
  const [despesas, setDespesas] = useState(getDespesas());

  function salvarDescricao() {
    const descricao = texto.trim();
    if (!descricao) return;
    insertDespesas(descricao);
    setTexto("");
  }

    function salvarValor() {
    const valor = texto.trim();
    if (!valor) return;
    insertDespesas(valor);
  }

  function carregarDespesas() {
    setDespesas(getDespesas());
  }

    return (
       <View style={estilos.cabecalho}>
               <Text style={estilos.textoPrincipal}>Olá Marcus!</Text>
               <Text style={estilos.subtexto}>Quais são as suas despesas?</Text>
           
         </View>


             
    )
};

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
    marginTop: 10

  }


})