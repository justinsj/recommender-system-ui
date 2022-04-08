import {View} from 'react-native';
import {TemporarilyOutOfStock} from './TemporarilyOutOfStock';
import {BigPrice} from './BigPrice';
import {FreeDelivery} from './FreeDelivery';
import {SelectDeliveryLocation} from './SelectDeliveryLocation';


export function ProductInformation(props) {
  const {style, price, temporarilyOutOfStock} = props
  return (
    <View style={[styles.ctr, style]}>
      <BigPrice style={styles.price} price={price}/>
      <FreeDelivery style={styles.FreeDelivery}/>
      <SelectDeliveryLocation style={styles.SelectDeliveryLocation}/>
      {temporarilyOutOfStock ? <TemporarilyOutOfStock/> : null}
    </View>
  )
}

const styles = {
  ctr: {
    // padding: 15,
  },
  price: {
    marginBottom: 22,
  },
  text: {
    color: '#565959',
    fontFamily: '',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18.2,
  },
  FreeDelivery: {
    marginBottom: 8,
  },
  SelectDeliveryLocation: {
    marginBottom: 8,
  },
}