import { View, Text } from 'react-native';
import { TemporarilyOutOfStock } from './TemporarilyOutOfStock';
import { BigPrice } from './BigPrice';


export function Details(props){
    const {children} = props
    return (
        <View style={styles.ctr}>
            <Text style={styles.title}>
                Details
            </Text>
            {children}
        </View>
    )
}

const styles = {
    ctr: {
        padding: 15,
    },
    title: {

    },
    text: {
        color: '#0f1111',
        fontFamily: '"Amazon Ember", Arial, sans-serif',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 23.4,
    }
}