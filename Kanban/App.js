import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (

    <SafeAreaView style={estilos.tela}>
        <View style={estilos.tela}>
          <View>
            <Text style={estilos.tituloHeader}>Quadro de Tarefas!</Text>
            <Text style={estilos.subtituloHeader}>Kanban estático</Text>
          </View>
        </View>
<Text style={estilos.subtitulo}>Quadro</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}>
        <View style={estilos.caixa}>
          <Text style={estilos.subtitulo}>A Fazer</Text>
          <View style={estilos.botaoMenu}>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
          </View>
        </View>


        <View style={estilos.caixa}>
          <Text style={estilos.subtitulo}>Em Progresso</Text>
          <View style={estilos.botaoMenu}>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
          </View>
        </View>


        <View style={estilos.caixa}>
          <Text style={estilos.subtitulo}>Concluído</Text>
          <View style={estilos.botaoMenu}>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
            <Text style={estilos.card}>Leitura Página 85 a 120</Text>
          </View>
        </View>
</ScrollView>

    
 <View style={estilos.containerBotoes}>
    <TouchableOpacity style={[estilos.botao, { backgroundColor: "#3b82f6" }]}>
      <Text style={estilos.textoBotao}>Adicionar Tarefa</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[estilos.botao, { backgroundColor: "#ef4444" }]}>
      <Text style={estilos.textoBotao}>Filtrar Tarefa</Text>
    </TouchableOpacity>
  </View>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({

  tela: {
    padding: 16,
    backgroundColor: "#fff",
  },

  card: {
    width: "110%",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 10,
  },

  cardTitulo: {
    fontWeight: "600",
    marginBottom: 4,
    fontSize: 15,
  },

  headr: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  tituloHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
  },

  subtituloHeader: {
    fontSize: 14,
    color: "#6b7280",
  },

  subtitulo: {
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 6,
    fontSize: 16,
    color: "#111",
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 90,
  },

  caixa: {
    width: 250,
    height: 580, 
    backgroundColor: "#f0ededff",
    borderRadius: 10,
    padding: 12,
    borderWidth: 2,
    borderColor: "#e2d8d8ff",
    marginBottom:100,
  },

  botaoMenu: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },

  containerBotoes: {
  flexDirection: "row",
  justifyContent: "space-around", 
  marginTop: 20,
},

botao: {
  flex: 1,
  marginHorizontal: 30,
  paddingVertical: 12,
  borderRadius: 10,
  alignItems: "center",
},

textoBotao: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 16,
}


})
