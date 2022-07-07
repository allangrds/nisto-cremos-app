import React from "react"
import {
  ScrollView,
  useColorModeValue,
  VStack,
  Pressable,
  Text,
  Box,
} from "native-base"

import { Header } from '../../components'
import { creeds, Creed } from '../../constant'

export const Home = ({ navigation }: any) => {
  return (
    <ScrollView backgroundColor={useColorModeValue('white', 'muted.900')}>
      <Header />
      <VStack padding={3} space={2}>
        {
          creeds.map((creed: Creed, index: number) => (
            <Pressable
              key={creed.parameter}
              onPress={() => navigation.navigate('Detail', {
                creed: creed.parameter
              })}
            >
              {({
                isPressed
              }) => (
                <Box
                  borderWidth="1"
                  borderColor="muted.200"
                  p="5"
                  rounded="8"
                  style={{
                    transform: [{
                      scale: isPressed ? 0.96 : 1
                    }]
                  }}
                >
                  <Text fontWeight="500" fontSize="md">
                    {index + 1}. {creed.title}
                  </Text>
                </Box>
              )}
            </Pressable>
          ))
        }
      </VStack>
    </ScrollView>
  )
}
