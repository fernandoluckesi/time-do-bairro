import React from 'react'
import { View } from 'react-native'
import { UserImage, UserImageProps } from './styles'
import { ImageProps } from 'react-native-svg'

export const UserAvatar: React.FC<UserImageProps> = ({
  size,
  color = null,
  source,
}) => {
  return <UserImage size={size} color={color} source={source} />
}
