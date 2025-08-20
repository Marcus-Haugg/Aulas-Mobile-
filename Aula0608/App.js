<<<<<<< HEAD
import { View, Text, Button } from "react-native";
=======
import { View, Text, Button, Image} from "react-native";
>>>>>>> 461ce09 (Trabalho estilização)

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<<<<<<< HEAD
      <Text>Olá Mundo!!</Text>
      < Button
       title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button" />
=======
      <Text>Olá mundo!!</Text>
      <Button
  title="Clique aqui"
  accessibilityLabel="Learn more about this purple button"
/>

 <Image
        
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        
      />



>>>>>>> 461ce09 (Trabalho estilização)
    </View>
  );
}
