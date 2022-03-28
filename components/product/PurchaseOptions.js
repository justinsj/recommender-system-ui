import { View, Text, Button } from 'react-native';
import { TemporarilyOutOfStock } from './TemporarilyOutOfStock';
import { BigPrice } from './BigPrice';


export function PurchaseOptions(props){
    const {price, temporarilyOutOfStock} = props
    return (
        <View style={styles.ctr}>
            <View
                style={[styles.button, styles.primaryButton]}
            >
                <Text style={styles.text}>
                    Add to Cart
                </Text>
            </View>
            <View
                style={[
                    styles.button, 
                    styles.secondaryButton,
                    {marginLeft: 12}
                ]}
            >
                <Text style={styles.text}>
                    Buy Now
                </Text>
            </View>
        </View>
    )
}

const styles = {
    ctr: {
        flexDirection: 'row',

    },
    text: {
        color: '#0f1111',
        fontFamily: '"Amazon Ember", Arial, sans-serif',
        fontSize: 16,
        lineHeight: 21.6,
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,

        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    primaryButton: {
        borderColor: '#fcd200',
        backgroundColor: '#ffd814',
    },
    secondaryButton: {
        borderColor: '#ff8f00',
        backgroundColor: '#ffa41c',
    },
}