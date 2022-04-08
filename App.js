import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./screens/HomeScreen";
import {SettingsScreen} from "./screens/SettingsScreen";
import {constants} from './constants/constants';
import {ProductScreen} from './screens/ProductScreen';
import {Text, TouchableHighlight} from 'react-native';
import {ResultsScreen} from './screens/ResultsScreen';
import {createStackNavigator} from "@react-navigation/stack";
import {SecretButton} from "./components/home/SecretButton";
import {AppContext} from './context/AppContext';
import {createId} from "./helpers/data.helpers";
import {useState} from 'react';
import {LogAPI} from "./wrappers/LogAPI";
import {Actions} from './constants/Actions';
import {SetupScreen} from './screens/SetupScreen';
import { Interfaces } from './constants/Interfaces';


const Stack = createStackNavigator();


export default function App() {
  const [userId, setUserId] = useState(createId());
  const [taskId, setTaskId] = useState('no task');
  const [interfaceId, setInterfaceId] = useState(Interfaces.control);
  const [sessionId, setSessionId] = useState(createId());
  return (
    <AppContext.Provider value={{
      userId, setUserId,
      taskId, setTaskId,
      interfaceId, setInterfaceId,
      sessionId, setSessionId,
    }}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Setup"
            component={SetupScreen}
            options={{
              headerLeft: () => {
              },
              headerStyle: {
                backgroundColor: '#232f3e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={({navigation}) => ({
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
              headerTintColor: '#fff',
            })}
          />
          <Stack.Screen
            name={'Results'}
            component={ResultsScreen}
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
              headerTintColor: '#fff',
            })}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerStyle: {
                backgroundColor: '#232f3e',
              },
              headerTintColor: '#fff',
            }}
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
  }
}