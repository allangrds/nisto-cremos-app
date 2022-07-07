import React from "react"
import {
  Text,
  HStack,
  Heading,
  Switch,
  useColorMode,
  ScrollView,
} from "native-base"

export const Home = () => (
  <ScrollView>
    <Heading size="lg">aWelcome to NativeBase</Heading>
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
