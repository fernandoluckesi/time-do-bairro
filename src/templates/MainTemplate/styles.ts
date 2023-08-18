import styled from 'styled-components/native'

export const MainContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`

export const ChildrenContent = styled.ScrollView`
  padding: 0px 8px;
`
