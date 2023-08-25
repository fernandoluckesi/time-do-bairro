import styled from 'styled-components/native'
import theme from '../../global/theme'

export const MainContainer = styled.View`
  flex-direction: row;
`

export const SearchIcon = styled.View`
  background-color: ${({ theme }) => theme.colors.shapeLight};
  border-radius: 8px 0px 0px 8px;
  justify-content: center;
  padding: 0 16px;
`

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.textGray,
})`
  background-color: ${({ theme }) => theme.colors.shapeLight};
  border-radius: 0 8px 8px 0;

  flex-grow: 1;
  font-family: ${({ theme }) => theme.fonts.regular};
  height: 40px;
`
