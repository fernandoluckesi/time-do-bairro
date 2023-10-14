import React, { useState } from 'react'
import { MainContainer } from './styles'
import { RefreshControl } from 'react-native'

type MenuListProps = {
  children: string | JSX.Element | JSX.Element[]
}

export const MenuList: React.FC<MenuListProps> = ({ children }) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])
  return (
    <MainContainer
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </MainContainer>
  )
}
