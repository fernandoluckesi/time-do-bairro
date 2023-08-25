import React from 'react'
import { UserImage, UserImageProps } from './styles'

export const UserAvatar: React.FC<UserImageProps> = ({
  size,
  color = null,
  source,
}) => {
  return <UserImage size={size} color={color} source={source} />
}
