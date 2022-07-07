import React from "react"
import { Button} from 'react-native'
import {
  Heading,
  ScrollView,
} from "native-base"

export const Detail = ({ navigation }: any) => (
  <ScrollView>
    <Heading size="lg">aWelcome to NativeBase</Heading>
    <Button
      title="Go to Home"
      onPress={() => navigation.goBack()}
    />
  </ScrollView>
)
