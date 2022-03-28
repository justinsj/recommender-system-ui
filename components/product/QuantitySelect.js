import { View, Text } from 'react-native';
import { TemporarilyOutOfStock } from './TemporarilyOutOfStock';
import { BigPrice } from './BigPrice';
import { AntDesign } from '@expo/vector-icons'; 


export function QuantitySelect(props){
  const {price, temporarilyOutOfStock} = props
  return (
    <View style={styles.ctr}>
      <Text style={styles.text}>
        Qty: 1
      </Text>
      <AntDesign name="down" size={13} color="black" />
    </View>
  )
}

const styles = {
    ctr: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 7,
      backgroundColor: '#f0f2f2',
      shadowColor: '#0f111126',
      elevation: 2,
      padding: 7,
      paddingLeft: 13,
    },
    text: {
        color: '#0f1111',
        fontFamily: '"Amazon Ember", Arial, sans-serif',
        fontSize: 13,
        lineHeight: 18.2,
    }
}