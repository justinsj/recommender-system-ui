import {Text, View} from 'react-native';

export function Results(props) {

  return (
    <View style={styles.ctr}>
      <Text style={styles.title}>RESULTS</Text>
      <Text style={styles.text}>Price and other details may vary based on produce size and colour.</Text>
    </View>
  )
}

const styles = {
  ctr: {
    paddingHorizontal: 8,
  },
  title: {
    color: '#0F1111',
    fontFamily: '"Amazon Ember", Arial, sans-serif',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
  },
  text: {
    color: '#0F1111',
    fontFamily: '"Amazon Ember", Arial, sans-serif',
    fontSize: 12,
    lineHeight: 16,
  },
}