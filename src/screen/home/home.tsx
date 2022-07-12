import * as React from 'react'
import {
  Box,
  FlatList,
  Pressable,
  useColorModeValue,
  VStack,
  Text,
} from 'native-base'

import { Header, Loading, SearchInput } from '../../components'
import { useGetCreeds } from '../../hooks'

export const Home = ({ navigation }: any) => {
  const [data, isLoading, searchCreeds] = useGetCreeds()

  return (
    <Box height="100%" backgroundColor={useColorModeValue('white', 'muted.900')}>
      <Header />
      <Box padding={3}>
        <VStack w="100%" space={5} alignSelf="center">
          <SearchInput onChangeText={(text) => searchCreeds(text)} />
        </VStack>
      </Box>
      {
        isLoading
          ? <Loading />
          : (
            <Box padding={3}>
              <FlatList
                ListFooterComponent={<Box marginBottom={180}/>}
                data={data}
                keyExtractor={item => item.name}
                renderItem={({ item: creed }) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Detail', {
                        name: creed.name,
                        key: creed.key,
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
                          {creed.key}. {creed.name}
                        </Text>
                      </Box>
                    )}
                  </Pressable>
                )}
              />
            </Box>
          )
      }
    </Box>
  )
}
