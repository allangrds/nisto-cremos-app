import React from "react"
import { Button} from 'react-native'
import {
  ScrollView,
  useColorModeValue,
} from "native-base"

import { Header } from '../../components'

export const Home = ({ navigation }: any) => {
  return (
    <ScrollView backgroundColor={useColorModeValue('muted.100', 'muted.900')}>
      <Header />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </ScrollView>
  )
}
