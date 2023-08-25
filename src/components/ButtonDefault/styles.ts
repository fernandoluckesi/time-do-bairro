import styled from 'styled-components/native'
import { ButtonDefaultProps } from '.'

type ButtonDefaultStyleProps = {
  backgroundColor: string
}

export const MainContainer = styled.TouchableOpacity<ButtonDefaultStyleProps>`
  align-items: center;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`

export const AddSymbolText = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 24px;
  margin: 7px 0;
`

export const TextContent = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  margin: 14px 0;
`
