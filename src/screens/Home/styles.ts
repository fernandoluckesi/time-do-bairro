import { styled } from 'styled-components/native'

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const MenuListContainer = styled.ScrollView`
  padding: 16px 8px;
`
