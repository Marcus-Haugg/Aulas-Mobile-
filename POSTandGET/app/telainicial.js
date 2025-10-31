import { View, Text, StyleSheet,Button} from "react-native";
import {Link} from "expo-router";

export default function TelaInicial(){
    return (
      <View style={estilos.container}>
      <Text style={estilos.titulo}>Bem-vindo Marcus!</Text>
      <Text style={estilos.subtitulo}>
        Liste e Cadastre produtos de froma rápida!.
      </Text>

      <Link href="/telalista" asChild>
        <Button title="Começar agora" color="#007AFF" />
      </Link>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 30,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
});