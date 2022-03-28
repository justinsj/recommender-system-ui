import { Text, View, FlatList } from "react-native";
import { data } from "../components/data/data";
import { Entry } from "../components/home/Entry";
import { Results } from './../components/home/Results';

export function HomeScreen() {
  return (
    
    <View style={styles.listCtr}>
      <Results/>

      <FlatList 
        data={[
          data.refrigerator,
          data.refrigerator2,
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
