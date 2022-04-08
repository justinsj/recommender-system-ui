import {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import '../../helpers/date.helpers.js';

export function SecretButton(props) {
  if (!props.onPress) console.error("onPress is required");
  const {
    onPress,
    children,
    minTouches,
    durationThresholdSeconds
  } = props;
  const [touches, setTouches] = useState([]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        const latest = new Date();
        while (touches.length > 0) {
          if (new Date(touches[0]).addSeconds(durationThresholdSeconds) < latest) {
            touches.shift();
          } else {
            break;
          }
        }
        touches.push(latest.toISOString());

        if (touches.length >= minTouches) {
          onPress();
        }
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  )
}