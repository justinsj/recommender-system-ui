import { Text, View } from "react-native";

export function Price(props){
    const {price} = props;
    
    const [whole, decimal] = price.toString().split(".")
    return (
        <View>
            <Text>{whole}</Text>
            <Text>{decimal}</Text>
        </View>
    )
}