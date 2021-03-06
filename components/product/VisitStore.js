import {Text} from 'react-native';


export function VisitStore(props) {
  const {children} = props
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = {
  text: {
    color: '#007185',
    fontFamily: '',
    fontSize: 13,
    lineHeight: 18.2,
  }
}