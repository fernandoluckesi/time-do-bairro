import React from 'react'
import {
  ArrowIcon,
  ItemIcon,
  ItemSubtitle,
  ItemTextContent,
  ItemTitle,
  MainContainer,
} from './styles'
import { Image } from 'react-native-svg'
import { ImageProps, ImageSourcePropType } from 'react-native'

export type MenuListItemProps = {
  icon?: () => any
  title: string
  subtitle?: string
  onPress: () => any
}

export const MenuListItem: React.FC<MenuListItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
}) => {
  return (
    <MainContainer onPress={onPress}>
      <ItemIcon source={icon} />
      <ItemTextContent>
        <ItemTitle>{title}</ItemTitle>
        {subtitle && <ItemSubtitle>{subtitle}</ItemSubtitle>}
      </ItemTextContent>
      <ArrowIcon source={require('./../../../assets/icons/arrow-right.png')} />
    </MainContainer>
  )
}
