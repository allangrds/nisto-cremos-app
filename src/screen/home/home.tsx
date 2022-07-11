import * as React from 'react'
import {
  Box,
  FlatList,
  Pressable,
  ScrollView,
  useColorModeValue,
  VStack,
  Text,
} from 'native-base'
// import AwesomeDebouncePromise from 'awesome-debounce-promise'

import { Header, Loading, SearchInput } from '../../components'
// import { creeds as baseCreeds, Creed } from '../../constant'

export const Home = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = React.useState(false)
  // const [creeds, setCreeds] = React.useState(baseCreeds)

  // const handleSearch = async (text: string) => {
  //   setIsLoading(true)
  //   if (text.length === 0) {
  //     await AwesomeDebouncePromise(() => {
  //       setCreeds(baseCreeds)
  //       setIsLoading(false)
  //     }, 500)()

  //     return
  //   }

  //   const searchCreeds = () =>
  //     baseCreeds.filter((creed) =>
  //       creed.tags.some((tag) => tag.toUpperCase() === text.toUpperCase())
  //     )

  //   const result = await AwesomeDebouncePromise(() => {
  //     setIsLoading(false)

  //     return searchCreeds()
  //   }, 500)()
  //   setCreeds(result)
  // }

  return (
    <ScrollView backgroundColor={useColorModeValue('white', 'muted.900')}>
      <Header />
      <Box padding={3}>
        <VStack w="100%" space={5} alignSelf="center">
          {/* <SearchInput onChangeText={handleSearch} /> */}
        </VStack>
      </Box>
      {/* {isLoading ? (
        <Loading />
      ) : (
        <Box padding={3}>
          <FlatList
            data={creeds}
            keyExtractor={item => item.title}
            renderItem={({ item: creed }) => (
              <Pressable
                key={creed.parameter}
                onPress={() =>
                  navigation.navigate('Detail', {
                    creed: creed.parameter,
                    id: creed.numbering,
                  })
                }
                marginBottom={3}
              >
                {({ isPressed }) => (
                  <Box
                    borderWidth="1"
                    borderColor="muted.200"
                    p="5"
                    rounded="8"
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                  >
                    <Text fontWeight="500" fontSize="md">
                      {creed.numbering}. {creed.title}
                    </Text>
                  </Box>
                )}
              </Pressable>
            )}
          />
        </Box>
      )} */}
    </ScrollView>
  )
}