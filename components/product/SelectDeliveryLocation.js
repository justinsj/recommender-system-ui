import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export function SelectDeliveryLocation(props){
    return (
        <View>
            <Ionicons name="location-outline" size={15} color="#0f1111" />
            <Text style={styles.text}>Select delivery location</Text>
        </View>
    )
}

const styles = {
    text: {
        color: '#565959',
        fontSize: 15,
        lineHeight: 20.25,
        fontFamily: '"Amazon Ember",Arial,sans-serif',
    },
}