import React from 'react'
import { ChildrenContent, MainContainer } from './styles'
import {
  HeaderDefault,
  HeaderDefaultProps,
} from '../../components/HeaderDefault'

interface MainTemplateProps extends HeaderDefaultProps {
  children: React.ReactNode
}

export const MainTemplate: React.FC<MainTemplateProps> = ({
  title,
  goBackScreen,
  children,
  sourceRightIcon,
}) => {
  return (
    <MainContainer>
      <HeaderDefault
        title={title}
        goBackScreen={goBackScreen}
        sourceRightIcon={sourceRightIcon}
      />
      <ChildrenContent>{children}</ChildrenContent>
    </MainContainer>
  )
}
