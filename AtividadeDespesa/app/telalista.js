import { View, Text, StyleSheet,Button, TextInput} from "react-native";
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
    const descricao = descricao.trim();
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
      <SafeAreaView style={estilos.areaSegura}>
       <View style={estilos.cabecalho}>
               <Text style={estilos.textoPrincipal}>Olá Marcus!</Text>
               <Text style={estilos.subtexto}>Quais são as suas despesas?</Text>
           
        </View>

        <View style={estilos.linhaEntrada}>
          <TextInput
          value={setDescricao}
          placeholder="Descrição..."
          placeholderTextColor="#999"
          style={estilos.campoTexto}/>
        </View>

          <View style={estilos.linhaEntrada}>
          <TextInput
          value={setValor}
          placeholder="Valor R$"
          placeholderTextColor="#999"
          style={estilos.campoTexto}/>
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

})