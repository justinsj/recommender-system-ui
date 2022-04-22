import {Text, View} from 'react-native';

export function AddedItemsCount(props) {
  const {count, style} = props;
  return (
    <View style={[styles.ctr, style]}>
      <Text style={styles.text}>{count}</Text>
    </View>
  )
}

const styles = {
  ctr: {
    borderRadius: 200,
    backgroundColor: '#fcbb6a',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
}