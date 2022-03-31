import { Text, View, FlatList, TouchableHighlight } from "react-native";
import { useRef, useState } from 'react';
import { SearchBar } from '../components/home/SearchBar';
import { AntDesign } from '@expo/vector-icons';

const DEFAULT_PROMPT = 'Click the search bar to begin!';

export function HomeScreen() {
  const textInputRef = useRef(null);
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);

  return (
    
    <View style={styles.ctr}>
      <View style={styles.searchCtr}>
        <SearchBar 
          myref={textInputRef} 
          onFail={()=>{
            setPrompt('No results!\nTry searching for: refrigerator');
          }}
          onSucceed={()=>{
            setPrompt(DEFAULT_PROMPT);
          }}
        />
      </View>
      <TouchableHighlight 
        style={styles.main}
        underlayColor={'#fff'}
        activeOpacity={0.5}
        onPress={()=>{textInputRef.current.focus()}}
      >
        <View style={styles.main}>
          <AntDesign name="arrowup" size={80} color="black" />
          <Text style={styles.prompt}>{prompt}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = {
  searchCtr: {
    paddingHorizontal: 12,
    backgroundColor: '#232f3e',
    paddingBottom: 12,

  },
  ctr: {
    background: '#fff',
    flex: 1,
  },
  main: {
    flex: 1,
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
