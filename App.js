import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { constants } from './components/data/constants';
import { ProductScreen } from './screens/ProductScreen';
import { Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';
import { ResultsScreen } from './screens/ResultsScreen';
import {createStackNavigator} from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{ 
            tabBarIcon: makeIconRender("home"),
            headerTitle: constants.companyName,
            headerStyle: {
              backgroundColor: '#232f3e',
              borderBottomWidth: 0,
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name={'Results'}
          component={ResultsScreen}
          options={({navigation})=>({ 
            headerLeft: ()=>(
              <TouchableHighlight
                onPress={()=>{
                  navigation.goBack();
                }}
                activeOpacity={0.5}
                underlayColor={"#232f3e"}
                style={styles.button}
              >
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableHighlight>
            ),
            tabBarIcon: null,
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
          options={({navigation})=>({ 
            headerLeft: ()=>(
              <TouchableHighlight
                onPress={()=>{
                  navigation.goBack();
                }}
                activeOpacity={0.5}
                underlayColor={"#232f3e"}
                style={styles.button}
              >
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableHighlight>
            ),
            tabBarIcon: null,
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
          options={{ tabBarIcon: makeIconRender("cog"),
          headerStyle: {
            backgroundColor: '#232f3e',
          },
          headerTintColor: '#fff',
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}


const styles = {
  button: {
    padding: 12,
  }
}