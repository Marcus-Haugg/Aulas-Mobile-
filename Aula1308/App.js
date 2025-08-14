import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{height: 500}}>
      <View style={estilos.cetralizado}>
      <Text style={estilos.textoazul}>Universal React with</Text>
      <Text style={estilos.textoazul}>Universal React with</Text>
      <Text style={estilos.textoazul}>Universal React with</Text>
      <View style={estilos.caixaquadriangular}></View>
      <View style={estilos.caixaretangular}></View>
      </View>
</View>
      

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  textoazul:{
    color: 'purple'
  },
  tela:{
    marginTop: 350,
    marginLeft: 120
  },
  caixaretangular:{
    width: 100,
    height: 50,
    backgroundColor: 'purple'

  },
  caixaquadriangular:{
    width: 100,
    height:100,
    backgroundColor: 'blue',
    borderRadius: 50
  },

  cetralizado:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
