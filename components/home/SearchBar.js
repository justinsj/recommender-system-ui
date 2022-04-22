import {TextInput, TouchableHighlight, View} from "react-native";
import {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {AntDesign} from '@expo/vector-icons';

export function SearchBar(props) {
  const navigation = useNavigation();
  const {style, myref, onFail, onSucceed} = props;
  if (!onFail) console.error('onFail not defined');
  if (!onSucceed) console.error('onSucceed not defined');
  const [text, setText] = useState('');

  const onSubmit = () => {
    const loweredText = text.toLowerCase();

    if (loweredText.includes('ref') || loweredText.includes('fridge')) {
      navigation.navigate('Recs');
      onSucceed();
    } else {
      onFail();
    }
  }
  return (
    <View style={[styles.row, styles.ctr, style]}>
      <TextInput
        ref={myref}
        style={styles.textInput}
        placeholder="Search Amason.ca"
        onChangeText={(text) => {
          setText(text);
        }}
        onSubmitEditing={onSubmit}
        defaultValue={text}
      />
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={'#fcbb6a'}
        onPress={onSubmit}
        style={styles.button}
      >
        <View>
          <AntDesign name="search1" size={24} color="black"/>
        </View>
      </TouchableHighlight>


    </View>

  )
}

const styles = {
  ctr: {
    flex: 1,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#fcbb6a',
    padding: 8,
    borderRadius: 8,
    position: 'absolute',
    right: 0,
    top: 0,
    // zIndex: 2,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    // pointerEvents: 'box-none',

  },
  textInput: {
    flex: 1, padding: 8, borderRadius: 8,
    height: 42,
    backgroundColor: '#fff',
  },
}