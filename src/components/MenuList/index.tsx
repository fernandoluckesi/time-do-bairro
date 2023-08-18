import React from 'react'
import { MainContainer } from './styles'

type MenuListProps = {
  children: string | JSX.Element | JSX.Element[]
}

export const MenuList: React.FC<MenuListProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>
}
