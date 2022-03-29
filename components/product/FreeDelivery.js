import { Text, View } from "react-native";

export function FreeDelivery(props){
    const {style} = props;
    return (
        <View style={[style]}>
            <Text style={styles.text}>FREE delivery</Text>
        </View>
    )
}

const styles = {
    text: {
        color: '#007185',
        fontSize: 15,
        lineHeight: 20.25,
        fontFamily: '"Amazon Ember",Arial,sans-serif',
    },
}