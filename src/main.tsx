import * as React from 'react';
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Detail as DetailScreen,
  Home as HomeScreen
} from './screen'

const Stack = createNativeStackNavigator();

export const Main = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          options={({ route }: any) => {

            return {
              title: `${route.params.key}. ${route.params.name}`,
              headerShown: true,
            }
          }}
        >
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
)
