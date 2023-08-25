import styled from 'styled-components/native'

export const SafeAreaViewStyled = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
`

export const MainContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 16px 16px;
  flex-direction: row;
  justify-content: center;
  padding: 24px 16px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const LeftIconContainer = styled.TouchableOpacity`
  left: 16px;
  position: absolute;
`

export const LeftIcon = styled.Image``

export const RightIconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`

export const RightIcon = styled.Image``
