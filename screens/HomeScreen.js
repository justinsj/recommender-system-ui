import { Text, View, FlatList } from "react-native";
import { data } from "../components/data/data";
import { Entry } from "../components/Entry";
import { Results } from './../components/Results';

export function HomeScreen() {
  return (
    
    <View style={styles.listCtr}>
      <Results/>

      <FlatList 
        data={[
          data.refrigerator,
          data.refrigerator,
        ]}
        renderItem={({item})=>(<Entry 
          style={styles.entry}
          entry={item}
        />)}
      />
    </View>
  );
}

const styles = {
  listCtr: {
    paddingVertical: 4,
    background: '#fff',
    flex: 1,
  },
  entry: {
    marginHorizontal: 8,
    marginVertical: 4,
  }
}
