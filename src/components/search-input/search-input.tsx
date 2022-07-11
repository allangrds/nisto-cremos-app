import * as React from 'react'
import { Icon, Input } from 'native-base'

type Props = {
  onChangeText: (text: string) => void
}

export const SearchInput = ({ onChangeText }: Props) => (
  <Input
    onChangeText={onChangeText}
    placeholder="Procurar por termo ou crença"
    width="100%"
    borderRadius="8"
    padding="0"
    fontSize="md"
    autoCapitalize="none"
    InputLeftElement={
      <Icon
        m="2"
        ml="3"
        size="6"
        color="gray.400"
        // as={<MaterialIcons name="search" />}
      />
    }
  />
)
