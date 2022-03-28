import { View, Text } from 'react-native';
import { TemporarilyOutOfStock } from './TemporarilyOutOfStock';
import { BigPrice } from './BigPrice';


export function ProductInformation(props){
    const {price, temporarilyOutOfStock} = props
    return (
        <View style={styles.ctr}>
            <BigPrice price={price}/>
            <FreeDelivery/>
            <SelectDeliveryLocation/>
            { temporarilyOutOfStock ? <TemporarilyOutOfStock/> : null }
        </View>
    )
}

const styles = {
    ctr: {
        padding: 15,
    },
    text: {
        color: '#565959',
        fontFamily: '"Amazon Ember", Arial, sans-serif',
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 18.2,
    }
}