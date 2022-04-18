import {Text} from "react-native";

export function Title(props) {
  const {children, numberOfLines} = props;
  return (
    <Text
      style={styles.title}
      numberOfLines={numberOfLines ? numberOfLines : 3}
    >{children}</Text>
  )
}

const styles = {
  title: {
    // flex: 1,
    color: '#0F1111',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: '',
  }
}