import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
 
  const [resultado, setResultado] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
 
  function somar(n1, n2){
    const n1Convertido = parseFloat(n1);
    const n2Convertido = parseFloat(n2);
    const soma = n1Convertido + n2Convertido;
    return soma;
  }

   function subtracao(n1, n2){
    const n1Convertido = parseFloat(n1);
    const n2Convertido = parseFloat(n2);
    const subtracao = n1Convertido - n2Convertido;
    return subtracao;
  }

   function multiplicacao(n1, n2){
    const n1Convertido = parseFloat(n1);
    const n2Convertido = parseFloat(n2);
    const multiplicacao = n1Convertido * n2Convertido;
    return multiplicacao;
  }

   function Divisao(n1, n2){
    if (num2 == 0){
      return "ERRO!!!"
    }else{const n1Convertido = parseFloat(n1);
    const n2Convertido = parseFloat(n2);
    const Divisao = n1Convertido / n2Convertido;
    return Divisao;}
  }

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <Text style={estilos.texto}>Número 1</Text>
      <TextInput
        style={estilos.campo}
        placeholder="Digite um número"
        keyboardType="numeric"
        onChangeText={setNum1}
        value={num1}
      />
      <Text style={estilos.texto}>Número 2</Text>
      <TextInput
        style={estilos.campo}
        placeholder="Digite um número"
        keyboardType="numeric"
        onChangeText={setNum2}
        value={num2}
      />
      <View style={estilos.botoes}>
        <Button style={estilos. botao}title=" + " onPress={() => setResultado(somar(num1, num2))}/>
        <Button style={estilos.botoes}title=" - " onPress={() => setResultado(subtracao(num1,num2))}/>
        <Button style={estilos.botoes}title=" * " onPress={() => setResultado(multiplicacao(num1,num2))}/>
        <Button style={estilos.botoes}title=" / "onPress={() => setResultado(Divisao(num1,num2))}/>
      </View>
      <Text style={{fontSize: 40}}>Resultado: {resultado}</Text>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
 areaSegura: {
  flex: 1,
  paddingTop: 40,
 },
 campo: {
  borderWidth: 1,
  borderRadius: 15
 },
 botoes: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 20,
  backgroundColor: "#ffffffff",
 },
 texto:{
fontSize: 20,
backgroundColor: "#26c1f0ff",
 }
});
