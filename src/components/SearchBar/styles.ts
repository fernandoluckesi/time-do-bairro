import styled from 'styled-components/native'
import theme from '../../global/theme'

export const MainContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`

export const SearchIcon = styled.View`
  background-color: ${({ theme }) => theme.colors.shapeLight};
  justify-content: center;
  padding: 0 16px;
`

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.textGray,
})`
  background-color: ${({ theme }) => theme.colors.shapeLight};
  flex-grow: 1;
  font-family: ${({ theme }) => theme.fonts.regular};
  height: 40px;
`
