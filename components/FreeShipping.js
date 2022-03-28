import { Text, View } from "react-native";

export function FreeShipping(props){
    return (
        <Text style={styles.text}>FREE Shipping by Amazon</Text>
    )
}

const styles = { 
    text: {
        color: '#565959',
        fontSize: 12,
        fontWeight: 300,
        lineHeight: 16,
        fontFamily: '"Amazon Ember",Arial,sans-serif',
        marginBottom: 4,
    }
}