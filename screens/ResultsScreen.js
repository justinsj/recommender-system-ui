import { View, FlatList } from "react-native";
import { data } from "../data/data";
import { Entry } from "../components/results/Entry";
import { Results } from '../components/results/Results';
import { useContext, useCallback } from 'react';
import { AppContext } from "../context/AppContext";
import { LogAPI } from './../wrappers/LogAPI';
import { Actions } from './../constants/Actions';
export function ResultsScreen() {
  const { userId, taskId } = useContext(AppContext);

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
    for (const {item, isViewable} of changed){
      const { productId } = item;
      if (isViewable){
        LogAPI.put({
          userId,
          ts: new Date().toISOString(),
          taskId,
          productId,
          action: Actions.viewed,
        })
      }
      else {
        LogAPI.put({
          userId,
          ts: new Date().toISOString(),
          taskId,
          productId,
          action: Actions.viewedReverse,
        })
      }
    }
  }, []);
  const results = [
    data.refrigerator,
    data.refrigerator,
    data.refrigerator,
    data.refrigerator,
    data.refrigerator,
    data.refrigerator2,
    data.refrigerator2,
    data.refrigerator2,
    data.refrigerator2,
    data.refrigerator2,
  ];
  return (
    
        <FlatList 
          style={styles.listCtr}
          contentContainerStyle={{flex: 1}}
          ListHeaderComponent={<Results/>}
          data={results}
          renderItem={({item, index})=>(<Entry 
            style={styles.entry}
            entry={item}
            index={index}
          />)}
          keyExtractor={(item,index)=>index}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 1,
            waitForInteraction: false,

          }}
        />
  );
}

const styles = {
  listCtr: {
    paddingVertical: 4,
    background: '#fff',
    // position: 'fixed',
    flexGrow: 1,
  },
  entry: {
    marginHorizontal: 8,
    marginVertical: 4,
  }
}
