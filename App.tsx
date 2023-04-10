import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyledContainer } from './src/StyledComponent';
import Home from './src/screen/home';
import Test from './src/screen/test';
import { StackParam } from './src/type/StackParam';

import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator<StackParam>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default StyledContainer(App);