import React from 'react'
import { MainContainer, AddSymbolText, TextContent } from './styles'

export type ButtonDefaultProps = {
  backgroundColor: string
  text: string
  iconChildren?: React.ReactNode
  onPress: () => any
}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  backgroundColor,
  text,
  iconChildren,
  onPress,
}) => {
  return (
    <MainContainer backgroundColor={backgroundColor} onPress={onPress}>
      {iconChildren}
      <TextContent>{text}</TextContent>
    </MainContainer>
  )
}
