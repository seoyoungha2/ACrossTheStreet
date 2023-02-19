import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen.js'
import SecondScreen from './SecondScreen.js'
import ThirdScreen from './ThirdScreen.js'
import FourthScreen from './FourthScreen.js'
import FifthScreen from './FifthScreen.js'
import SixthScreen from './SixthScreen.js'
import SeventhScreen from './SeventhScreen.js'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "Home"}}
        />
        <Stack.Screen 
          name="Second"
          component={SecondScreen}
          options={{title: "Options"}}
        />
        <Stack.Screen 
          name="Third"
          component={ThirdScreen}
          options={{title: "Clinics"}}
        />
        <Stack.Screen 
          name="Fourth"
          component={FourthScreen}
          options={{title: "Insurance"}}
        />
        <Stack.Screen 
          name="Fifth"
          component={FifthScreen}
          options={{title: "Info Page 1"}}
        />
        <Stack.Screen 
          name="Sixth"
          component={SixthScreen}
          options={{title: "Results"}}
        />
        <Stack.Screen 
          name="Seventh"
          component={SeventhScreen}
          options={{title: "More Options"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#b6bcf6',
    padding: 8,
  },
  paragraph: {
    margin: 18,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    display: 'block',
    //margin-left: 'auto',
    height: 170,
    width: 180,

  },
  input: {
    alignSelf: 'center',
    fontSize: 18,
    borderWidth: 1,
    height: 40, 
    width: 180,
    margin: 20,
    paddingLeft: 5,
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'white',
  },
});
