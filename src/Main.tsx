import React from "react"
import {
  NativeBaseProvider,
} from "native-base"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home as HomeScreen } from './screen'

const Stack = createNativeStackNavigator()

export const Main = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
)
