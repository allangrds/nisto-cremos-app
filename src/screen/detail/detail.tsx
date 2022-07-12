import * as React from 'react'
import {
  Box,
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
                marginTop={4}
                flexDirection="row"
                flexWrap="wrap"
                space={2}
              >
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
            </Box>
          )
      }
    </ScrollView>
  )
}
