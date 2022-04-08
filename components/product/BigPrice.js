import {Text, View} from "react-native";

export function BigPrice(props) {
  const {style, price} = props;

  const [whole, decimal] = price.toString().split(".")
  return (
    <View style={[styles.ctr, style]}>
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
    position: 'relative',
    color: '#0F1111',
    fontFamily: '',
    fontSize: 15,
    top: 7,
  },
  whole: {
    color: '#0F1111',
    fontFamily: '',
    fontSize: 38,
  },
  decimal: {
    position: 'relative',
    color: '#0F1111',
    fontFamily: '',
    fontSize: 15,
    top: 7,
  },
}