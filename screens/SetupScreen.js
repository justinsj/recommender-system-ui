import { Text, View, FlatList, TouchableHighlight } from "react-native";
import { useRef, useState } from 'react';
import { data } from "../data/data";
import { Entry } from "../components/home/Entry";
import { Results } from '../components/home/Results';
import { SearchBar } from '../components/home/SearchBar';
import { AntDesign } from '@expo/vector-icons';
import { AppContext } from './../context/AppContext';

const DEFAULT_PROMPT = 'Randomize';

export function SetupScreen() {
  const { userId, setUserId,
          taskId, setTaskId, } = useContext(AppContext);
  const [ prompt, setPrompt ] = useState(DEFAULT_PROMPT);

  return (
    
    <View style={styles.ctr}>
      <View style={styles.inputCtr}>
        <View>userId</View>
        <TextInput
          ref={myref}
          style={styles.textInput}
          placeholder="Set user id"
          onChangeText={(text)=>{
              setUserId(text);
          }}
          onSubmitEditing={()=>{
              
          }}
          defaultValue={userId}
        />
      </View>
      <TouchableHighlight 
        style={styles.button}
        underlayColor={'#fff'}
        activeOpacity={0.5}
        onPress={()=>{
          console.log("randomized userId");
          setUserId(createId())
        }}
      >
        <View style={styles.main}>
          <Text style={styles.prompt}>{prompt}</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.inputCtr}>
        <View>taskId</View>
        <TextInput
          ref={myref}
          style={styles.textInput}
          placeholder="Set user id"
          onChangeText={(text)=>{
              setTaskId(text);
          }}
          onSubmitEditing={()=>{
              
          }}
          defaultValue={taskId}
        />
      </View>
    </View>
  );
}

const styles = {
  inputCtr: {
    paddingHorizontal: 12,
    backgroundColor: '#232f3e',
    paddingVertical: 4,

  },
  ctr: {
    background: '#fff',
    flex: 1,
  },
  button: {
    padding: 14,
    backgroundColor: '#232f3e',
    borderRadiu: 8,
  },
  main: {
    // flex: 1,
    // background: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prompt: {
    textAlign: 'center',
    fontSize: 30,
    paddingHorizontal: 24,
  },
}
