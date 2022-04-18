import {Text, TextInput, TouchableHighlight, View} from "react-native";
import {useContext, useState} from 'react';
import {AppContext} from './../context/AppContext';
import {createId} from "../helpers/data.helpers";
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import {Interfaces} from './../constants/Interfaces';

const DEFAULT_PROMPT = 'Randomize';

export function SetupScreen() {
  const navigation = useNavigation();
  const {
    userId, setUserId,
    taskId, setTaskId,
    interfaceId, setInterfaceId,
    sessionId, setSessionId,
    setAddedItemsCount,
  } = useContext(AppContext);
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);

  return (

    <View style={styles.ctr}>
      <View style={styles.inputCtr}>
        <View><Text style={styles.title}>userId</Text></View>
        <TextInput
          style={styles.textInput}
          placeholder="Set user id"
          onChangeText={setUserId}
          onSubmitEditing={() => {

          }}
          value={userId}
        />
      </View>
      <TouchableHighlight
        style={styles.button}
        underlayColor={'#fff'}
        activeOpacity={0.5}
        onPress={() => {
          console.log("randomized userId");
          setUserId(createId())
        }}
      >
        <View style={styles.main}>
          <Text style={styles.prompt}>{prompt}</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.inputCtr}>
        <View><Text style={styles.title}>taskId</Text></View>
        <View
          style={styles.picker}
        >
          <RNPickerSelect
            style={styles.pickerInput}
            placeholder={{label: "Set task id", value: ''}}
            onValueChange={setTaskId}
            itemKey={'value'}
            items={[
              {label: 'Refrigerator', value: 'refrigerator'},
            ]}
            value={taskId}
          />
        </View>
      </View>
      <View style={styles.inputCtr}>
        <View><Text style={styles.title}>interfaceId</Text></View>
        <View
          style={styles.picker}
        >
          <RNPickerSelect
            style={styles.pickerInput}
            placeholder={{label: "Set interface id", value: ''}}
            onValueChange={setInterfaceId}
            itemKey={'value'}
            items={[
              {label: 'Control', value: Interfaces.control},
              {label: 'Small Image, Short Text', value: Interfaces.small_short},
              {label: 'Small Image, Long Text', value: Interfaces.small_long},
              {label: 'Large Image, Short Text', value: Interfaces.large_short},
              {label: 'Large Image, Long Text', value: Interfaces.large_long},
            ]}
            value={interfaceId}
          />
        </View>
      </View>
      <View style={styles.inputCtr}>
        <View><Text style={styles.title}>sessionId</Text></View>
        <TextInput
          style={styles.textInput}
          placeholder="Set user id"
          onChangeText={setSessionId}
          onSubmitEditing={() => {

          }}
          value={sessionId}
        />
      </View>
      <TouchableHighlight
        style={[styles.button, styles.spacerDown]}
        underlayColor={'#fff'}
        activeOpacity={0.5}
        onPress={() => {
          setSessionId(createId())
        }}
      >
        <View style={styles.main}>
          <Text style={styles.prompt}>{prompt}</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.button, styles.spacerDown]}
        underlayColor={'#fff'}
        activeOpacity={0.5}
        onPress={() => {
          setAddedItemsCount(0);
        }}
      >
        <View style={styles.main}>
          <Text style={styles.prompt}>Reset Added Items</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        underlayColor={'#fff'}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <View style={styles.main}>
          <Text style={styles.prompt}>Start</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = {
  inputCtr: {
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    paddingVertical: 4,

  },
  spacerDown: {
    marignBottom: 48,
  },
  ctr: {
    backgroundColor: '#fff',
    flex: 1,
  },
  button: {
    padding: 14,
    backgroundColor: '#fcbb6a',
    borderRadius: 8,
    margin: 12,
  },
  main: {
    // flex: 1,
    // background: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#0F1111',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#0F1111',
    borderRadius: 8,
  },
  pickerInput: {
    padding: 6,
    fontSize: 16,
  },
  prompt: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 24,
  },
  title: {
    paddingTop: 16,
    paddingBottom: 8,
  },
}
