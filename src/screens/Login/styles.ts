import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

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

export const TabNavigatorContainer = styled.View`
  flex: 1;
  border: 1px solid red;
  margin-top: 32px;
  padding: 0 16px;
`
