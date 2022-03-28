import { Text, View } from "react-native";

export function Price(props){
    const {price} = props;
    
    const [whole, decimal] = price.toString().split(".")
    return (
        <View style={styles.ctr}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.whole}>{whole}</Text>
            <Text style={styles.decimal}>{decimal}</Text>
        </View>
    )
}

const styles = {
    ctr: {
        flex: 1,
        flexDirection: 'row',
    },
    dollar: {
        color: '#0F1111',
        fontFamily: '"Amazon Ember", Arial, sans-serif',
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 16,
        top: -5,
    },
    whole: {
        color: '#0F1111',
        fontFamily: '"Amazon Ember", Arial, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 20,
    },
    decimal: {
        color: '#0F1111',
        fontFamily: '"Amazon Ember", Arial, sans-serif',
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 16,
        top: -5,
    },
}