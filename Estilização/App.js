import {ScrollView, View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Dica importante:
 * - No React Native, o padrão de flexDirection é "column", ao contrário da WEB que é "row".
 * - justifyContent = eixo principal | alignItems = eixo cruzado.
 */
export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header/avatar */}
        <View style={estilos.header}>
           <Image
            source={{ uri: "https://i.pravatar.cc/150?img=3" }} // URL da imagem
            style={estilos.circulo}
          />
          
          <View>
            <Text style={estilos.tituloHeader}>Olá, Estudante</Text>
            <Text style={estilos.subtituloHeader}>Bem-vindo ao seu painel</Text>
          </View>
        </View>

        {/*MENU*/}
        <Text style={estilos.subtitulo}>Menu</Text>
        <View style={estilos.menu}>
          <View style={[estilos.botaoMenu, { backgroundColor: "#3b82f6" }]}>
          <Text style={estilos.textoBotao}>NOTAS</Text>
          </View>
        <View style={[estilos.botaoMenu, { backgroundColor: "#22c55e" }]}>
          <Text style={estilos.textoBotao}>AULAS</Text>
          </View> 
        <View style={[estilos.botaoMenu, { backgroundColor: "#a855f7" }]}>
          <Text style={estilos.textoBotao}>AVISOS</Text>
        </View> 
        </View>
       
        

        {/*ATIVIDADES */}
        <Text style={estilos.subtitulo}>Próximas Atividades</Text>
        <TouchableOpacity>
        <View style={estilos.card}>
          <Text style={estilos.textoCaixa}>Trabalho Matemática</Text>
          <Text style={estilos.cardDescricao}>22/08</Text>
        </View>
        </TouchableOpacity>
         <TouchableOpacity>
         <View style={estilos.card}>
          <Text style={estilos.textoCaixa}>Leitura da Página 56 a 86</Text>
          <Text style={estilos.cardDescricao}>Livro: Capitães de areia </Text>
        </View>
        </TouchableOpacity>
         <TouchableOpacity>
         <View style={estilos.card}>
          <Text style={estilos.textoCaixa}>Prova física</Text>
          <Text style={estilos.cardDescricao}>29/08</Text>
        </View>
        </TouchableOpacity>       

        {/* Chamada para a ação */}
        <Text style={estilos.titulo}>Chamada para ação</Text>
        <View style={estilos.centralizado}>
          <Text style={{ marginBottom: 8 }}>Adquira um novo curso para continuar aprendendo!</Text>
          <View style={estilos.botaoCTA}>
          <Button title="COMPRAR CURSO" color="#f7f4f7ff"/>
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
  titulo: {
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 6,
  },
  caixa: {
    width: "100%",
    backgroundColor: "#e7d5d5ff",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e2dadaff",
    marginBottom: 12,
  },
  caixaPequena: {
    width: "100%",
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    padding: 8,
    marginBottom: 12,
  },
  caixaDestaque: {
    borderWidth: 1,
    borderColor: "#60a5fa",
    backgroundColor: "#dbeafe",
  },
  textoCaixa: {
    fontWeight: "600",
  },
  blocoFlex: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    height: 100,
  },
  quadrado: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  centralizado: {
    width: "100%",
    height: 120,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    justifyContent: "center", // eixo principal (padrão column)
    alignItems: "center", // eixo cruzado (padrão row)
  },
  circulo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e5e7eb",
    marginRight: 12,
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
    marginBottom: 16,
  },
  botaoMenu: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
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
  cardDescricao: {
    color: "#6b7280",
    fontSize: 13,
  },
  botaoCTA: {
    backgroundColor: "#9333ea",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
 
  
});
