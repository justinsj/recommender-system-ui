import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./screens/HomeScreen";
import {constants} from './constants/constants';
import {ProductScreen} from './screens/ProductScreen';
import {Linking, Text, TouchableHighlight} from 'react-native';
import {RecsScreen} from './screens/RecsScreen';
import {createStackNavigator} from "@react-navigation/stack";
import {SecretButton} from "./components/home/SecretButton";
import {AppContext} from './context/AppContext';
import {createId} from "./helpers/data.helpers";
import {useEffect, useState} from 'react';
import {LogAPI} from "./wrappers/LogAPI";
import {Actions} from './constants/Actions';
import {SetupScreen} from './screens/SetupScreen';
import {getInterfaces, Interfaces} from './constants/Interfaces';
import {AddedItemsCount} from "./components/common/AddedItemsCount";

/* Tests */
import './tests/data.test';
import {convertStringToInt} from "./helpers/char.helpers";
import {getTasks} from "./constants/tasks";

const Stack = createStackNavigator();


export default function App() {
  const [userId, setUserId] = useState(createId());
  const [taskId, setTaskId] = useState('refrigerator');
  const [interfaceId, setInterfaceId] = useState(Interfaces.control);
  const [sessionId, setSessionId] = useState(createId());
  const [addedItemsCount, setAddedItemsCount] = useState(0);
  const [addedItems, setAddedItems] = useState(new Set());

  const [interfaces, setInterfaces] = useState(getInterfaces(convertStringToInt(sessionId)));
  const [tasks, setTasks] = useState(getTasks(convertStringToInt(sessionId)));

  useEffect(()=>{
    const interfaces = getInterfaces(convertStringToInt(sessionId))
    setInterfaceId(interfaces[0].value);
    setInterfaces(interfaces);

    const tasks = getTasks(convertStringToInt(sessionId));
    setTaskId(tasks[0].value);
    setTasks(tasks);
  },[sessionId]);

  return (
    <AppContext.Provider value={{
      userId, setUserId,
      taskId, setTaskId,
      interfaceId, setInterfaceId,
      sessionId, setSessionId,
      addedItemsCount, setAddedItemsCount,
      addedItems, setAddedItems,
      interfaces, setInterfaces,
      tasks, setTasks,
    }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Results'}
        >
          <Stack.Screen
            name="Setup"
            component={SetupScreen}
            options={{
              headerLeft: () => {
              },
              headerStyle: {
                backgroundColor: '#232f3e',
              },
              headerRight: () => (
                <AddedItemsCount
                  style={styles.headerRight}
                  count={addedItemsCount}
                />
              ),
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={({navigation}) => ({
              headerLeft: () => {
              },
              headerTitle: () => (<SecretButton
                minTouches={6}
                durationThresholdSeconds={2}
                onPress={() => {
                  navigation.navigate('Setup')
                }}
              ><Text style={styles.title}>{constants.companyName}</Text></SecretButton>),
              headerStyle: {
                backgroundColor: '#232f3e',
                borderBottomWidth: 0,
              },
              headerRight: () => (
                <AddedItemsCount
                  style={styles.headerRight}
                  count={addedItemsCount}
                />
              ),
              headerTintColor: '#fff',
            })}
          />
          <Stack.Screen
            name={'Results'}
            component={RecsScreen}
            options={({navigation}) => ({
              headerLeft: () => (
                <TouchableHighlight
                  onPress={() => {
                    navigation.goBack();
                  }}
                  activeOpacity={0.5}
                  underlayColor={"#232f3e"}
                  style={styles.button}
                >
                  <AntDesign name="arrowleft" size={24} color="white"/>
                </TouchableHighlight>
              ),
              headerTitle: constants.companyName,
              headerStyle: {
                backgroundColor: '#232f3e',
              },
              headerRight: () => (
                <AddedItemsCount
                  style={styles.headerRight}
                  count={addedItemsCount}
                />
              ),
              headerTintColor: '#fff',
            })}
          />
          <Stack.Screen
            name={'Product'}
            component={ProductScreen}
            options={({route, navigation}) => ({
              headerLeft: () => (
                <TouchableHighlight
                  onPress={() => {
                    const {entry} = route && route.params ? route.params : {entry: data.refrigerator};
                    const {productId} = entry;
                    LogAPI.put({
                      logs: [{
                        userId,
                        ts: new Date().toISOString(),
                        taskId,
                        interfaceId,
                        sessionId,
                        productId,
                        addedItemsCount,
                        action: Actions.clickedReverse,
                      }],
                    });
                    navigation.goBack();
                  }}
                  activeOpacity={0.5}
                  underlayColor={"#232f3e"}
                  style={styles.button}
                >
                  <AntDesign name="arrowleft" size={24} color="white"/>
                </TouchableHighlight>
              ),
              headerTitle: constants.companyName,
              headerStyle: {
                backgroundColor: '#232f3e',
              },
              headerRight: () => (
                <AddedItemsCount
                  style={styles.headerRight}
                  count={addedItemsCount}
                />
              ),
              headerTintColor: '#fff',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

function makeIconRender(name) {
  return ({color, size}) => (
    <MaterialCommunityIcons name={name} color={color} size={size}/>
  );
}


const styles = {
  title: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
  button: {
    padding: 12,
  },
  headerRight: {
    marginRight: 12,
  },
}