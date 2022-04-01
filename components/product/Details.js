import {Text, View} from 'react-native';


export function Details(props) {
  const details = props && props.details ? props.details : {};
  return (
    <View style={styles.ctr}>
      <Text style={styles.title}>
        Details
      </Text>
      {Object.entries(details).map(([key, value]) => {
        return (
          <View key={key} style={styles.row}>
            <View style={styles.keyCtr}>
              <Text style={styles.key}>{key}</Text>
            </View>
            <View style={styles.valueCtr}>
              <Text style={styles.value}>{value}</Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = {
  ctr: {},
  row: {
    flexDirection: 'row',
    marginTop: 12,
  },
  keyCtr: {
    flex: 1,
    flexGrow: 0.6,
    marginRight: 20,
  },
  valueCtr: {
    flex: 1,
  },
  key: {
    color: '#565959',
    fontFamily: '"Amazon Ember", Arial, sans-serif',
    fontSize: 15,
    lineHeight: 20.25,
  },
  value: {
    textAlign: 'left',
    color: '#0f1111',
    fontFamily: '"Amazon Ember", Arial, sans-serif',
    fontSize: 15,
    lineHeight: 20.25,
  },
  title: {
    color: '#0f1111',
    fontFamily: '"Amazon Ember", Arial, sans-serif',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 23.4,
  }
}