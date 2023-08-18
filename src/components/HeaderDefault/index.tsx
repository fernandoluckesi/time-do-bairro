import React from 'react'
import {
  ArrowLeft,
  ArrowLeftIcon,
  MainContainer,
  SafeAreaViewStyled,
  Title,
} from './styles'

export type HeaderDefaultProps = {
  title: string
  goBackScreen: () => any
}

export const HeaderDefault: React.FC<HeaderDefaultProps> = ({
  title,
  goBackScreen,
}) => {
  return (
    <>
      <SafeAreaViewStyled />
      <MainContainer>
        <ArrowLeft onPress={goBackScreen}>
          <ArrowLeftIcon
            source={require('../../../assets/icons/arrow-left-light.png')}
          />
        </ArrowLeft>
        <Title>{title}</Title>
      </MainContainer>
    </>
  )
}
