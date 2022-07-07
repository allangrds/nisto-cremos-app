import React from "react";
import {
  Text,
  HStack,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';

export const Main = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <ScrollView>
        <Heading size="lg">aWelcome to NativeBase</Heading>
        <ToggleDarkMode />
      </ScrollView>
    </NavigationContainer>
  </NativeBaseProvider>
)

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
