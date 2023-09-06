import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

interface LoginButtonProps {
  backgroundColor?: string
  borderColor?: string
  textColor?: string
}

const widthHeader = Dimensions.get('window')

const ratioHeader = widthHeader.width / 375

export const MainContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shapeLight};
  flex: 1;
`

export const Header = styled.ImageBackground`
  align-items: center;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  height: ${ratioHeader * 223}px;
  width: ${widthHeader.width}px;
`

export const HeaderBackdrop = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  height: ${ratioHeader * 223}px;
  opacity: 0.65;
  width: ${widthHeader.width}px;
`

export const Logo = styled.Image`
  bottom: 32px;
  position: absolute;
  width: ${widthHeader.width * 0.7}px;
`

export const TermsOfUseAndPrivacyText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: 48px auto 0;
  max-width: 300px;
  text-align: center;
`

export const TermsOfUseAndPrivacyTextEmphasis = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  text-decoration: underline;
`

export const LoginButtonsContainer = styled.View`
  align-items: center;
  gap: 24px;
  margin-top: 48px;
`

export const LoginButton = styled.TouchableOpacity<LoginButtonProps>`
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'transparent'};
  border: 2px solid
    ${({ borderColor, theme }) =>
      borderColor ? borderColor : theme.colors.shapeDark};
  border-radius: 25px;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  width: 297px;
`

export const LoginButtonIcon = styled.Image`
  left: 30px;
  position: absolute;
`

export const LoginButtonText = styled.Text<LoginButtonProps>`
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
`

export const TabNavigatorContainer = styled.View`
  flex: 1;
  margin-top: 32px;
  padding: 0 16px;
`
