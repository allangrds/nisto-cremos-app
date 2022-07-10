import * as React from 'react'
import { Button } from 'react-native'
import {
  Box,
  Heading,
  HStack,
  Popover,
  Pressable,
  ScrollView,
  useColorModeValue,
  Text,
  VStack,
} from 'native-base'
import YoutubePlayer from 'react-native-youtube-iframe'

import { Header, Loading } from '../../components'
import { creeds, Creed } from '../../constant'

export const Detail = ({ navigation, route }: any) => {
  const { creed } = route.params
  const creedDetail = creeds.find((item: Creed) => creed === item.parameter)

  return (
    <ScrollView backgroundColor={useColorModeValue('white', 'muted.900')}>
      <Header withHeaderNavigation />
      {creedDetail ? (
        <Box paddingX={4} paddingBottom={4}>
          <Heading
            size="md"
            marginBottom={2}
            marginTop={4}
            color={useColorModeValue('black', 'white')}
          >
            {creedDetail.title}
          </Heading>
          {creedDetail.texts.map((text) => (
            <Text
              lineHeight={28}
              key={text.substring(0, 10)}
              fontSize="md"
              color={useColorModeValue('black', 'white')}
            >
              {text}
            </Text>
          ))}
          <HStack
            marginBottom={4}
            marginTop={4}
            flexDirection="row"
            flexWrap="wrap"
            space={2}
          >
            {creedDetail.biblical_passages.map((biblicalPassage) => (
              <Popover
                placement="top"
                key={biblicalPassage.label}
                trigger={(triggerProps) => (
                  <Pressable {...triggerProps}>
                    <Text
                      fontSize="lg"
                      color={useColorModeValue('muted.400', 'muted.200')}
                    >
                      {biblicalPassage.label}
                    </Text>
                  </Pressable>
                )}
              >
                <Popover.Content maxWidth="90%" maxHeight={200}>
                  <Popover.Body>
                    <ScrollView>
                      <Text
                        fontSize="md"
                        color={useColorModeValue('black', 'white')}
                      >
                        {biblicalPassage.passage}
                      </Text>
                    </ScrollView>
                  </Popover.Body>
                </Popover.Content>
              </Popover>
            ))}
          </HStack>
          <VStack space={2}>
            {creedDetail.youtubeIds.map((videoId) => (
              <YoutubePlayer key={videoId} height={180} videoId={videoId} />
            ))}
          </VStack>
        </Box>
      ) : (
        <Loading />
      )}
    </ScrollView>
  )
}
