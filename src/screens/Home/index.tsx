import React, { useEffect, useState } from 'react'
import { MainContainer, MenuListContainer } from './styles'
import { HeaderHome } from '../../components/HeaderHome'
import { MenuList } from '../../components/MenuList'
import { MenuListItem } from '../../components/MenuListItem'
import { useUserData } from '../../hooks/useUserData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../../components/Loading'
import { Navigations } from '../../utils/navigations'

export default function Home({ navigation }) {
  const [getDataError, setGetDataError] = useState(false)
  const [userIdState, setUserIdState] = useState(0)

  const { isLoading, userData } = useUserData()

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
                onPress={() =>
                  Navigations.navigateToScreen(navigation, 'My Teams Tab')
                }
              />
              <MenuListItem
                icon={require('./../../../assets/icons/search-icon.png')}
                title="Pesquisar"
                subtitle="Pesquisar por times, quadras ou jogador(a)s"
              />
              <MenuListItem
                icon={require('./../../../assets/icons/user-icon.png')}
                title="Meu perfil"
                subtitle="Visualizar e editar perfil"
                onPress={() =>
                  Navigations.navigateToScreen(navigation, 'My Profile Tab')
                }
              />
            </MenuList>
          </MenuListContainer>
        </>
      )}
    </MainContainer>
  )
}
