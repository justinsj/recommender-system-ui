import {View} from "react-native";

export function Line(props) {
  const {style} = props;
  return <View style={[styles.line, style]}/>;
}

const styles = {
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#6d6d6d',
  }
}