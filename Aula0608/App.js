import { View, Text, Button } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Olá Mundo!!</Text>
      < Button
       title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button" />
    </View>
  );
}
