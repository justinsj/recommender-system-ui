import {Text, TouchableHighlight, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export function PurchaseOptions(props) {
  if (!props.onBuyNow) console.error("onBuyNow not defined");
  if (!props.onAddToCart) console.error("onAddToCart not defined");

  const {style, price, temporarilyOutOfStock, onBuyNow, onAddToCart} = props;
  const navigation = useNavigation();
  return (
    <View style={[styles.ctr, style]}>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={styles.primaryButton.backgroundColor}
        onPress={() => {
          onAddToCart();
          navigation.goBack();
        }}
        style={[styles.button, styles.primaryButton]}
      >
        <Text style={styles.text}>
          Add to Cart
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={styles.secondaryButton.backgroundColor}
        onPress={() => {
          onBuyNow();
          navigation.goBack();
        }}
        style={[
          styles.button,
          styles.secondaryButton,
          {marginLeft: 12}
        ]}
      >
        <Text style={styles.text}>
          Buy Now
        </Text>
      </TouchableHighlight>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,

    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  primaryButton: {
    borderColor: '#fcd200',
    backgroundColor: '#ffd814',
    flexGrow: 1.2,
  },
  secondaryButton: {
    borderColor: '#ff8f00',
    backgroundColor: '#ffa41c',
  },
}