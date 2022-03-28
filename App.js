import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { constants } from './components/data/constants';
import { ProductScreen } from './screens/ProductScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen
          name={constants.companyName}
          component={HomeScreen}
          options={{ 
            tabBarIcon: makeIconRender("home"),
            headerStyle: {
              backgroundColor: '#232f3e',
            },
            headerTintColor: '#fff',
          }}
        /> */}
        <Tab.Screen
          name={'Product'}
          component={ProductScreen}
          options={{ 
            tabBarIcon: makeIconRender("home"),
            headerTitle:'Amason',
            headerStyle: {
              backgroundColor: '#232f3e',
            },
            headerTintColor: '#fff',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarIcon: makeIconRender("cog"),
          headerStyle: {
            backgroundColor: '#232f3e',
          },
          headerTintColor: '#fff',
         }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
