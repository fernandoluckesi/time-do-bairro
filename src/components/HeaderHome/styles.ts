import styled from 'styled-components/native'

export const SafeAreaViewStyled = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
`

export const MainContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px 16px;
  border-radius: 0 0 16px 16px;
`

export const ContentContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`

export const PlayerContainer = styled.View`
  align-items: center;
  flex-direction: row;
`

export const PlayerText = styled.View`
  gap: 2px;
  margin-left: 16px;
`

export const PlayerName = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 16px;
`

export const PlayerPosition = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`

export const Notification = styled.TouchableOpacity``

export const NotificationIcon = styled.Image``

export const NotificationCount = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  height: 24px;
  justify-content: center;
  position: absolute;
  right: -8px;
  top: -8px;
  width: 24px;
`

export const NotificationText = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Logo = styled.Image``
