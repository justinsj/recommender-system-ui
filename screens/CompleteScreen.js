import {FlatList, View, TouchableHighlight, Linking, Text, StyleSheet} from "react-native";
import {useContext, useRef} from 'react';
import {data} from "../data/data";
import {Entry} from "../components/results/Entry";
import {Results} from '../components/results/Results';
import {AppContext} from "../context/AppContext";
import {LogAPI} from '../wrappers/LogAPI';
import {Actions} from '../constants/Actions';
import {convertStringToInt} from '../helpers/char.helpers';
import {constants} from '../constants/constants';
import {getInterfaceIndex} from '../helpers/interface.helpers';
import {getSlice} from '../helpers/list.helpers';
import {generateLink} from "../wrappers/GoogleForm";

export function CompleteScreen() {
  const {userId, taskId, sessionId, interfaceId} = useContext(AppContext);

  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 1,
    waitForInteraction: false,
  })

  return (
    <View style={styles.overlay}>
      <Text style={[styles.text]}>Task Complete!</Text>
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
    backgroundColor: 'rgba(0,0,0,0.35)',
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#fcbb6a',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
}
