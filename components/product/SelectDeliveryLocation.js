import {Text, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export function SelectDeliveryLocation(props) {
  const {style} = props;
  return (
    <View style={[styles.row, style]}>
      <Ionicons name="location-outline" size={17} color="#0f1111"/>
      <Text style={styles.text}>Select delivery location</Text>
    </View>
  )
}

const styles = {
  row: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  text: {
    marginLeft: 4,
    color: '#565959',
    fontSize: 15,
    lineHeight: 20.25,
    fontFamily: '',
  },
}