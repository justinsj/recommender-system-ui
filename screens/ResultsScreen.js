import {FlatList, Text, View} from "react-native";
import {data} from "../data/data";
import {Entry} from "../components/results/Entry";
import {Results} from '../components/results/Results';
import {useCallback, useContext} from 'react';
import {AppContext} from "../context/AppContext";
import {LogAPI} from './../wrappers/LogAPI';
import {Actions} from './../constants/Actions';
import { convertStringToInt } from './../helpers/char.helpers';
import { constants } from './../constants/constants';

export function ResultsScreen() {
  const {userId, taskId, sessionId} = useContext(AppContext);

  const onViewableItemsChanged = ({viewableItems, changed}) => {
    for (const {item, isViewable} of changed) {
      const {productId} = item;
      if (isViewable) {
        LogAPI.put({
          logs: [{
            userId,
            ts: new Date().toISOString(),
            taskId,
            sessionId,
            productId,
            action: Actions.viewed,
          }]
        })
      } else {
        LogAPI.put({
          logs: [{
            userId,
            ts: new Date().toISOString(),
            taskId,
            sessionId,
            productId,
            action: Actions.viewedReverse,
          }]
        })
      }
    }
  };

  const results = getSlice(
    Object.values(data), 
    convertStringToInt(sessionId) % constants.numInterfaces, 
    constants.numInterfaces,
  );

  return (
    <FlatList
      style={styles.listCtr}
      // contentContainerStyle={{flex: 1}}
      ListHeaderComponent={<Results/>}
      data={results}
      keyExtractor={(item, index) => index}
      renderItem={({item, index})=> (<Entry
        style={styles.entry}
        entry={item}
        index={index}
      />)}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 1,
        waitForInteraction: false,
      }}
    />
    // <FlatList
    //   style={styles.listCtr}
    //   contentContainerStyle={{flex: 1}}
    //   ListHeaderComponent={<Results/>}
    //   data={results}
    //   renderItem={({item, index}) => (<Entry
    //     style={styles.entry}
    //     entry={item}
    //     index={index}
    //   />)}
    //   keyExtractor={(item, index) => index}
    //   onViewableItemsChanged={onViewableItemsChanged}
    //   viewabilityConfig={{
    //     itemVisiblePercentThreshold: 1,
    //     waitForInteraction: false,

    //   }}
    // />
  );
}

const styles = {
  listCtr: {
    paddingVertical: 4,
    background: '#fff',
    // position: 'fixed',
    flexGrow: 1,
    // flex: 1,
  },
  entry: {
    marginHorizontal: 8,
    marginVertical: 4,
  }
}
