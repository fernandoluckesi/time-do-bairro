import styled from 'styled-components/native'

export const MainContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shapeLight};
  border-radius: 8px;
  flex-direction: row;
  margin-bottom: 8px;
  padding: 16px 16px;
`

export const ItemIcon = styled.Image`
  margin-right: 16px;
`

export const ItemTextContent = styled.View`
  justify-content: center;
  gap: 4px;
`

export const ItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`

export const ItemSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 12px;
`

export const ArrowIcon = styled.Image`
  position: absolute;
  right: 16px;
`
