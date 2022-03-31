import { View } from 'react-native';
import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import '../../helpers/date.helpers.js';

export function SecretButton(props){
  if (!props.onPress) console.error("onPress is required");
  const { onPress, children } = props; 
  const [touches, setTouches] = useState([]);

  return (
    <TouchableWithoutFeedback
      onPress={()=>{
        const latest = new Date()
        touches.push(latest.toISOString());
        while (touches.length > 0){
          if (new Date(touches[0]) + 2 < latest){
            touches.shift();
          }
        }
        if (touches.length > 5){
          onPress();
        }
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  )
}