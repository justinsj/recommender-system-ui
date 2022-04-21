import {Text, View} from "react-native";
import {FORMAT} from './../../helpers/format.helpers';

export function Price(props) {
  const {price, style} = props;

  const [whole, decimal] = price.toString().split(".")
  return (
    <View style={[styles.ctr, style]}>
      <Text style={styles.dollar}>$</Text>
      <Text style={styles.whole}>{FORMAT.commaFormat(whole)}</Text>
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
    fontFamily: '',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 16,
    top: -5,
  },
  whole: {
    color: '#0F1111',
    fontFamily: '',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 20,
  },
  decimal: {
    color: '#0F1111',
    fontFamily: '',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 16,
    top: -5,
  },
}