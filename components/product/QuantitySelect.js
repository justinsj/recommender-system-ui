import {Text, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export function QuantitySelect(props) {
  const {style, price, temporarilyOutOfStock} = props
  return (
    <View style={[styles.ctr, style]}>
      <Text style={styles.text}>
        Qty: 1
      </Text>
      <View style={styles.iconCtr}>
        <AntDesign name="down" size={13} color="black"/>
      </View>
    </View>
  )
}

const styles = {
  ctr: {
    borderColor: '#d5d9d9',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 7,
    backgroundColor: '#f0f2f2',
    shadowColor: '#0f111126',
    elevation: 2,
    padding: 7,
    paddingLeft: 13,
  },
  iconCtr: {
    paddingLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#0f1111',
    fontFamily: '"Amazon Ember", Arial, sans-serif',
    fontSize: 13,
    lineHeight: 18.2,
  }
}