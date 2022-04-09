import {View, Text} from 'react-native';
export function AddedItemsCount(props){
  const { count, style } = props;
  return (
    <View style={[styles.ctr, style]}>
      <Text style={styles.text}>{count}</Text>
    </View>

  )
}

const styles = {
  ctr: {
    borderRadius: 100,
    backgroundColor: '#fcbb6a',
    padding: 8,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
}