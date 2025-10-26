import { View, Text, StyleSheet,Button} from "react-native";
import {Link} from "expo-router";

export default function Batata(){
    return (
       <View style={estilos.cabecalho}>
               <Text style={estilos.textoPrincipal}>Olá Marcus!</Text>
               <Text style={estilos.subtexto}>Acesse o painel para buscar seu Pokemon!</Text>
            <Link href="/telalista" asChild>
               
                <Button title="Vamos achar caracterisicas do seu pokemon preferido pelo nomes!" />
                
            </Link>
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