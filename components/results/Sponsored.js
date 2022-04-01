import {Text} from "react-native";

export function Sponsored(props) {
  return (
    <Text style={styles.font}>Sponsored</Text>
  )
}

const styles = {
  font: {
    color: '#565959',
    fontFamily: '"Amazon Ember",Arial,sans-serif',
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 14.85,
  }
}