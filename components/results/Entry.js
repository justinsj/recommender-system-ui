import {TouchableHighlight} from "react-native";

import {useNavigation} from "@react-navigation/native";
import {LogAPI} from "../../wrappers/LogAPI";
import {Actions} from "../../constants/Actions";
import {useContext} from 'react';
import {AppContext} from './../../context/AppContext';
import {InterfaceWrapper} from './entries/InterfaceWrapper';

export function Entry(props) {
  const {userId, taskId, interfaceId, sessionId, addedItems} = useContext(AppContext);

  const navigation = useNavigation();
  const {entry, style,} = props;
  const {productId} = entry;

  return (
    <TouchableHighlight
      onPress={(e) => {
        LogAPI.put({
          logs: [{
            userId,
            ts: new Date().toISOString(),
            taskId,
            interfaceId,
            sessionId,
            productId,
            addedItemsCount: addedItems.size,
            action: Actions.clicked,
          }],
        })
        navigation.navigate("Product", {entry});
      }}
      underlayColor={"#fff"}
      activeOpacity={0.5}
    >
      <InterfaceWrapper
        interfaceId={interfaceId}
        entry={entry}
        style={style}
      />
    </TouchableHighlight>
  )
}

