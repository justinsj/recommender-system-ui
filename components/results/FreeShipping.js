import {Text} from "react-native";
import {constants} from '../../constants/constants';

export function FreeShipping(props) {
  return (
    <Text style={styles.text}>FREE Shipping by {constants.companyName}</Text>
  )
}

const styles = {
  text: {
    color: '#565959',
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 16,
    fontFamily: '',
    marginBottom: 4,
  }
}