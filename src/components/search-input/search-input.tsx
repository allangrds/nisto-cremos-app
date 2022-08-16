import * as React from 'react'
import { Icon, Input } from 'native-base'

type Props = {
  onChangeText: (text: string) => void
}

export const SearchInput = ({ onChangeText }: Props) => (
  <Input
    onChangeText={onChangeText}
    borderColor="muted.200"
    placeholderTextColor="muted.400"
    placeholder="Digite sua pesquisa..."
    width="100%"
    borderRadius="8"
    paddingY="4"
    paddingLeft="4"
    fontSize="md"
    autoCapitalize="none"
  />
)
