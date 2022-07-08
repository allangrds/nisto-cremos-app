import * as React from "react"
import {
  Icon,
  Input,
  ScrollView,
  useColorModeValue,
  VStack,
  Pressable,
  Text,
  Box,
} from "native-base"
import { MaterialIcons } from '@expo/vector-icons'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

import { Header, Loading } from '../../components'
import { creeds as baseCreeds, Creed } from '../../constant'

export const Home = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [creeds, setCreeds] = React.useState(baseCreeds)

  const handleSearch = async (text: string) => {
    setIsLoading(true)
    if (text.length === 0) {
      await AwesomeDebouncePromise(() => {
        setCreeds(baseCreeds)
        setIsLoading(false)
      }, 500)()

      return
    }

    const searchCreeds = () => baseCreeds.filter(creed => (
      creed.tags.some(tag => tag.toUpperCase() === text.toUpperCase())
    ))

    const result = await AwesomeDebouncePromise(() => {
      setIsLoading(false)

      return searchCreeds()
    }, 500)()
    setCreeds(result)
  }

  return (
    <ScrollView backgroundColor={useColorModeValue('white', 'muted.900')}>
      <Header />
      <Box padding={3}>
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            onChangeText={handleSearch}
            placeholder="Procurar por termo ou crença"
            width="100%"
            borderRadius="8"
            padding="0"
            fontSize="md"
            autoCapitalize="none"
            InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />}
          />
        </VStack>
      </Box>
      {
        isLoading ? <Loading /> : null
      }
      <VStack padding={3} space={2}>
        {
          creeds.map((creed: Creed, index: number) => (
            <Pressable
              key={creed.parameter}
              onPress={() => navigation.navigate('Detail', {
                creed: creed.parameter,
                id: creed.numbering
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
                    {creed.numbering}. {creed.title}
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
