import React, { useEffect, useState } from 'react'
import { MainContainer, MenuListContainer } from './styles'
import { HeaderHome } from '../../components/HeaderHome'
import { MenuList } from '../../components/MenuList'
import { MenuListItem } from '../../components/MenuListItem'
import { useLoadingPageUserData } from '../../hooks/useLoadingPageUserData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../../components/Loading'

export default function Home({ navigation }) {
  const [getDataError, setGetDataError] = useState(false)
  const [userIdState, setUserIdState] = useState(0)

  const { isLoading, userData } = useLoadingPageUserData()

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <MainContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeaderHome userData={userData} navigation={navigation} />
          <MenuListContainer>
            <MenuList>
              <MenuListItem
                icon={require('./../../../assets/icons/team-fill.png')}
                title="Meus times"
                subtitle="Gerenciar times"
                navigation={navigation}
                screen="My Teams Tab"
              />
              <MenuListItem
                icon={require('./../../../assets/icons/search-icon.png')}
                title="Pesquisar"
                subtitle="Pesquisar por times, quadras ou jogador(a)s"
                navigation={navigation}
                screen="My Teams Tab"
              />
              <MenuListItem
                icon={require('./../../../assets/icons/user-icon.png')}
                title="Meu perfil"
                subtitle="Visualizar e editar perfil"
                navigation={navigation}
                screen="My Profile Tab"
              />
            </MenuList>
          </MenuListContainer>
        </>
      )}
    </MainContainer>
  )
}
