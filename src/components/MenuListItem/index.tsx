import React from 'react'
import {
  ArrowIcon,
  ItemIcon,
  ItemSubtitle,
  ItemTextContent,
  ItemTitle,
  MainContainer,
} from './styles'
import { ImageSourcePropType } from 'react-native'
import { NavigationProp } from '@react-navigation/native'

export interface MenuListItemProps {
  icon?: ImageSourcePropType
  title: string
  subtitle?: string
  navigation: NavigationProp<any>
  screen: string
  routesParams?: Object | number | string
}

export const MenuListItem: React.FC<MenuListItemProps> = ({
  icon,
  title,
  subtitle,
  ...props
}) => {
  return (
    <MainContainer {...props}>
      <ItemIcon source={icon} />
      <ItemTextContent>
        <ItemTitle>{title}</ItemTitle>
        {subtitle && <ItemSubtitle>{subtitle}</ItemSubtitle>}
      </ItemTextContent>
      <ArrowIcon source={require('./../../../assets/icons/arrow-right.png')} />
    </MainContainer>
  )
}
