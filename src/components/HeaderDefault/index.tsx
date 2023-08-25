import React from 'react'
import {
  LeftIcon,
  LeftIconContainer,
  MainContainer,
  RightIcon,
  RightIconContainer,
  SafeAreaViewStyled,
  Title,
} from './styles'

export type HeaderDefaultProps = {
  title?: string
  goBackScreen: () => any
  sourceRightIcon?: React.ReactNode
  onPressRightIcon?: () => any
}

export const HeaderDefault: React.FC<HeaderDefaultProps> = ({
  title,
  goBackScreen,
  sourceRightIcon,
  onPressRightIcon,
}) => {
  return (
    <>
      <SafeAreaViewStyled />
      <MainContainer>
        <LeftIconContainer onPress={goBackScreen}>
          <LeftIcon
            source={require('../../../assets/icons/arrow-left-light.png')}
          />
        </LeftIconContainer>
        <Title>{title}</Title>
        {sourceRightIcon && (
          <RightIconContainer onPressRightIcon={onPressRightIcon}>
            {sourceRightIcon}
          </RightIconContainer>
        )}
      </MainContainer>
    </>
  )
}
