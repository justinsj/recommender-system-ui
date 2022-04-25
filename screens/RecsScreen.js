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

export function RecsScreen() {
  const {userId, taskId, sessionId, interfaceId, addedItems, interfaces} = useContext(AppContext);

  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 1,
    waitForInteraction: false,
  })

  const onViewableItemsChangedRef = useRef(({viewableItems, changed}) => {
    for (const {item, isViewable} of changed) {
      const {productId} = item;
      if (isViewable) {
        LogAPI.put({
          logs: [{
            userId,
            ts: new Date().toISOString(),
            taskId,
            interfaceId,
            sessionId,
            productId,
            addedItemsCount: addedItems.size,
            action: Actions.viewed,
          }]
        })
      } else {
        LogAPI.put({
          logs: [{
            userId,
            ts: new Date().toISOString(),
            taskId,
            interfaceId,
            sessionId,
            productId,
            addedItemsCount: addedItems.size,
            action: Actions.viewedReverse,
          }]
        })
      }
    }
  });

  const results = getSlice(
    Object.values(data),
    (convertStringToInt(sessionId) + getInterfaceIndex(interfaces, interfaceId)) % constants.numInterfaces,
    constants.numInterfaces,
  );

  return (
    <FlatList
      style={styles.listCtr}
      // contentContainerStyle={{flex: 1}}
      ListHeaderComponent={<Results/>}
      data={results}
      keyExtractor={(item, index) => index}
      renderItem={({item, index}) => (<Entry
        style={styles.entry}
        entry={item}
        index={index}
      />)}
      onViewableItemsChanged={onViewableItemsChangedRef.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
}

const styles = {
  listCtr: {
    paddingVertical: 4,
    background: '#fff',
    flexGrow: 1,
  },
  entry: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
}
