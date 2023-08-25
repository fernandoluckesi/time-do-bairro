import styled from 'styled-components/native'
import { InfosTableProps } from '.'

export interface InfosTablePropsStyled {
  inEvidence?: boolean
  lastLine?: boolean
  colorRightColumn?: string
}

export const MainContainer = styled.View``

export const Line = styled.View<InfosTablePropsStyled>`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, lastLine }) =>
    lastLine ? `transparent` : theme.colors.background};
  padding: 8px 0;
`

export const LeftColumn = styled.Text`
  color: ${({ theme }) => theme.colors.textGray};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const RightColumn = styled.View`
  align-items: flex-end;
  gap: 6px;
  max-width: 150px;
`

export const RightColumnText = styled.Text<InfosTablePropsStyled>`
  color: ${({ theme, colorRightColumn }) =>
    colorRightColumn ? theme.colors[colorRightColumn] : theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.regular};
  max-width: 120px;
`
