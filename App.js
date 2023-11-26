// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home'; 
import SignUp from './screens/SignUp';
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
                >
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

export default App;
