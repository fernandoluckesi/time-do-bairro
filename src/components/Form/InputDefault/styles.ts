import styled from 'styled-components/native'

interface InputDefaultStylesProps {
  isFocused: boolean
}

export const MainContainer = styled.View`
  gap: 4px;
  margin-bottom: 6px;
`

export const LineInputContainer = styled.View<InputDefaultStylesProps>`
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primary : theme.colors.inactive};
`

export const IconContainer = styled.View`
  padding: 8px 0;
`

export const TextInputStyled = styled.TextInput`
  padding: 8px 0 8px 16px;
  flex-grow: 1;
  font-family: ${({ theme }) => theme.fonts.regular};
  height: 100%;
`

export const TextInputErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.negative};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`
