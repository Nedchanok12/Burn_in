import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import PageA from './Screens/PageA';
import EarPhone from './Screens/earphone';
import PageB from './Screens/PageB';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="PageA"
          component={PageA}
        />
        <Stack.Screen
          name="EarPhone"
          component={EarPhone}
        />
        <Stack.Screen
          name="PageB"
          component={PageB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
