import { View, Text, StyleSheet, Button, TextInput, FlatList, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

async function getPokemon(pokemon){
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (resposta.ok) {
        const payload = await resposta.json();
        return payload;
    }
    return null;
}


export default function AulaAPIs() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonImg, setPokemonImg] = useState(null);
  const [pokemonPesquisar, setPokemonPesquisar] = useState('');

 async function carregarPokemon(){
        const poke = await getPokemon(pokemonPesquisar);
        setPokemon(poke.forms?.[0]?.name || 'Pokemon não encontrado')
        setPokemonImg(poke.sprites?.front_default || null);
    }



  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.textoPrincipal}>Olá Marcus!</Text>
        <Text style={estilos.subtexto}>Quais são as suas despesas?</Text>

      </View>

       <TextInput style={estilos.caixaTexto}
                value={pokemonPesquisar}
                onChangeText={setPokemonPesquisar}
            />
            <Button title="Pesquisar" onPress={carregarPokemon}/>
            <Text>{pokemon}</Text>
            <Image
                source={{ uri: pokemonImg }}
                style={{ width: 40, height: 40 }}
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

  containerLista: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5
  },

})