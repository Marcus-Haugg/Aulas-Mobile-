import { ScrollView, View, Text, StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (

<SafeAreaView style={estilos.tela}>  
  <ScrollView showsVerticalScrollIndicator={false}>

   <View Style={estilos.tela}>
    <View>
    <Text style={estilos.tituloHeader}>Quadro de Tarefas!</Text>
    <Text style={estilos.subtituloHeader}>Kanban estático</Text>
    </View>
   </View>












  </ScrollView>
</SafeAreaView> 
  );
}

const estilos = StyleSheet.create({

   tela: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },

 card: {
    width: "100%",
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

  headr:{
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


})
