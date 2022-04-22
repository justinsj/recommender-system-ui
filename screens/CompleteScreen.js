import {Linking, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {useContext, useRef} from 'react';
import {AppContext} from "../context/AppContext";
import {generateLink} from "../wrappers/GoogleForm";

export function CompleteScreen() {
  const {userId, taskId, sessionId, interfaceId} = useContext(AppContext);

  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 1,
    waitForInteraction: false,
  })

  return (
    <View style={styles.overlay}>
      <Text style={[styles.text, styles.black]}>Task Complete!</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={()=>{
          Linking.openURL(generateLink(userId, sessionId, taskId, interfaceId))
        }}
      >
        <Text style={styles.text}>Click Here</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = {
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#fff',
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#fcbb6a',
    padding: 12,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  black: {
    color: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
}
