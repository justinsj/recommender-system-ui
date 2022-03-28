import { Text, View } from "react-native";

export function TemporarilyOutOfStock(props){
    return (
        <Text style={styles.text}>Temporarily out of stock.</Text>
    )
}

const styles = {
    text: {
        color: '#565959',
        fontSize: 12,
        fontWeight: 300,
        lineHeight: 16,
        fontFamily: '"Amazon Ember",Arial,sans-serif',
    },
}