import * as React from 'react'
import {
  Box,
  FlatList,
  Heading,
  HStack,
  ScrollView,
  useColorModeValue,
  Text,
} from 'native-base'
import YoutubePlayer from 'react-native-youtube-iframe'

import { Header, Loading } from '../../components'
import { useGetCreed } from '../../hooks'

export const Detail = ({ route }: any) => {
  const [data, isLoading] = useGetCreed(route.params.name)

  return (
    <ScrollView backgroundColor={useColorModeValue('white', 'muted.900')}>
      <Header withHeaderNavigation />
      {
        isLoading
          ? <Loading />
          : (
            <Box paddingX={4} paddingBottom={4}>
              <Heading
                size="md"
                marginBottom={2}
                marginTop={4}
                color={useColorModeValue('black', 'white')}
              >
                {data.name}
              </Heading>
              <Text
                lineHeight={28}
                fontSize="md"
                color={useColorModeValue('black', 'white')}
              >
                {data.text}
              </Text>
              <HStack
                marginBottom={4}
                marginTop={2}
                flexDirection="row"
                flexWrap="wrap"
                space={2}
              >
                {
                  data.biblical_passages && data.biblical_passages.length > 0
                  ? (
                    data.biblical_passages.map(biblicalPassage => (
                      <Text
                        fontSize="lg"
                        fontWeight="bold"
                      >
                        {biblicalPassage.label}
                      </Text>
                    ))
                  ) : null
                }
              </HStack>
              {
                data.youtubeIds && data.youtubeIds.length > 0
                ? (
                  data.youtubeIds.map((videoId: string) => (
                    <YoutubePlayer
                      key={videoId}
                      height={213}
                      videoId={videoId}
                    />
                  ))
                ) : null
              }
              <Heading
                size="md"
                marginBottom={2}
                marginTop={4}
                color={useColorModeValue('black', 'white')}
              >
                Passagens
              </Heading>
              <FlatList
                data={data.biblical_passages}
                keyExtractor={item => item.label}
                renderItem={({ item }) => (
                  <Box marginBottom={3}>
                    <Text fontSize="lg" fontWeight="bold">
                      {item.label}
                    </Text>
                    <Text fontSize="md">
                      {item.passage}
                    </Text>
                  </Box>
                )}
              />
            </Box>
          )
      }
    </ScrollView>
  )
}
