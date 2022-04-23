import {Linking, ScrollView, Text, TextInput, TouchableHighlight, View} from "react-native";
import {useContext, useState} from 'react';
import {AppContext} from './../context/AppContext';
import {createId} from "../helpers/data.helpers";
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import {getInterfaceIndex, getNextIndex} from "../helpers/interface.helpers";
import {Line} from "../components/common/Line";
import {generateInterfaceSurveyLink, generateOverallSurveyLink} from "../wrappers/GoogleForm";

const DEFAULT_PROMPT = 'Randomize';

export function SetupScreen() {
  const navigation = useNavigation();
  const {
    userId, setUserId,
    taskId, setTaskId,
    interfaceId, setInterfaceId,
    sessionId, setSessionId,
    setAddedItemsCount,
    interfaces, setInterfaces,
    tasks, setTasks,
  } = useContext(AppContext);
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);

  //TODO update interfaces when sessionId is updated

  return (

    <ScrollView style={styles.ctr}>
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
            items={tasks}
            value={taskId}
          />
        </View>
        <TouchableHighlight
          style={[styles.button, styles.spacerDown, styles.noHorizontal]}
          underlayColor={'#fff'}
          activeOpacity={0.5}
          onPress={() => {
            const nextIndex = getNextIndex(tasks, taskId);
            const nextId = tasks[nextIndex].value;
            setTaskId(nextId);
          }}
        >
          <View style={styles.main}>
            <Text style={styles.prompt}>Next (
              {getInterfaceIndex(tasks, taskId) + 1}
              /{tasks.length})</Text>
          </View>
        </TouchableHighlight>
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
            items={interfaces}
            value={interfaceId}
          />
        </View>
        <TouchableHighlight
          style={[styles.button, styles.spacerDown, styles.noHorizontal]}
          underlayColor={'#fff'}
          activeOpacity={0.5}
          onPress={() => {
            const nextIndex = getNextIndex(interfaces, interfaceId);
            const nextInterfaceId = interfaces[nextIndex].value;
            setInterfaceId(nextInterfaceId);
          }}
        >
          <View style={styles.main}>
            <Text style={styles.prompt}>Next (
              {getInterfaceIndex(interfaces, interfaceId) + 1}
              /{interfaces.length})</Text>
          </View>
        </TouchableHighlight>
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
      <Line style={styles.line}/>
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
      <Line style={styles.line}/>
      <TouchableHighlight
        style={styles.button}
        onPress={()=>{
          Linking.openURL(generateInterfaceSurveyLink(userId, sessionId, taskId, interfaceId))
        }}
      >
        <View style={styles.main}>
          <Text style={styles.prompt}>Open Survey Link</Text>
        </View>
      </TouchableHighlight>
      <Line style={styles.line}/>
      <TouchableHighlight
        style={styles.button}
        onPress={()=>{
          Linking.openURL(generateOverallSurveyLink(userId, sessionId, taskId))
        }}
      >
        <View style={styles.main}>
          <Text style={styles.prompt}>Open Overall Survey Link</Text>
        </View>
      </TouchableHighlight>
      <Line style={styles.line}/>
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
    </ScrollView>
  );
}

const styles = {
  inputCtr: {
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    paddingVertical: 4,

  },
  spacerDown: {
    marginBottom: 8,
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
  noHorizontal: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  line: {
    paddingTop: 4,
    marginHorizontal: 12,
  },
}
