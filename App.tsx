import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyledContainer } from './src/StyledComponent';
import Home from './src/screen/home';
import Test from './src/screen/test';
import { StackParam } from './src/type/StackParam';

import {
	SafeAreaProvider,
} from 'react-native-safe-area-context';
import { defaultScreenOptions, defaultStack, initalStack } from 'src/stack';
import { Provider } from 'react-redux';
import store from 'src/store/store';

const Stack = createNativeStackNavigator<StackParam>();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initalStack} screenOptions={defaultScreenOptions}>
            {defaultStack.map((stack) => (
              <Stack.Screen key={stack.name} name={stack.name} component={stack.component} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default StyledContainer(App);