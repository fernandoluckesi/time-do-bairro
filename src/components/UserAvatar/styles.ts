import styled from 'styled-components/native'

export interface UserImageProps {
  size: number
  color?: string
  source: () => any
}

export const UserImage = styled.Image<UserImageProps>`
  border-color: ${({ color }) => (color ? color : 'transparent')};
  border-radius: ${({ size }) => (size ? size / 2 : 25)}px;
  border-width: ${({ color }) => (color ? '2px' : '0')};
  height: ${({ size }) => size || 50}px;
  width: ${({ size }) => size || 50}px;
`
