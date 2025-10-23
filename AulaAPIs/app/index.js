import { Button, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View>
            <Link href="/telainicial" asChild>
                <Button title="Clique para ir a tela inicial" />
            </Link>
        </View>
    )
};