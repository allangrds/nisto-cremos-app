import React from "react"
import { Button} from 'react-native'
import {
  Text,
  HStack,
  Heading,
  Switch,
  useColorMode,
  ScrollView,
} from "native-base"

export const Home = ({ navigation }: any) => (
  <ScrollView>
    <Heading size="lg">aWelcome to NativeBase</Heading>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Detail')}
    />
    <ToggleDarkMode />
  </ScrollView>
)

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
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
  )
}
