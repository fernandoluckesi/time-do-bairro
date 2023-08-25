import styled from 'styled-components/native'
import { UserAvatar } from '../../components/UserAvatar'

export const MainContainer = styled.View``

export const UserAvatarContainer = styled.View`
  align-items: center;
  margin-top: 24px;
`

export const UserInfosContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shapeLight};
  border-radius: 8px;
  margin-top: 24px;
  padding: 16px;
`
export const UserInfosHeader = styled.View`
  align-items: center;
  margin-bottom: 16px;
`
export const UserInfosTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 16px;
`

export const UserInfosSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textGray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
`

export const ExitButtonContainer = styled.View`
  margin-top: 100px;
`
