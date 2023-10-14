import React, { useEffect, useState } from 'react'
import { MainContainer, MenuListContainer, SearchBarContainer } from './styles'
import { HeaderDefault } from '../../../components/HeaderDefault'
import { MainTemplate } from '../../../templates/MainTemplate'
import { MenuList } from '../../../components/MenuList'
import { MenuListItem } from '../../../components/MenuListItem'
import { SearchBar } from '../../../components/SearchBar'
import { NavigationProp } from '@react-navigation/native'
import { getUserById } from '../../../Services/apis'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import { Navigations } from '../../../utils/navigations'
import { useUserData } from '../../../hooks/useUserData'

interface TeamsManage {
  navigation: NavigationProp<any>
}

export const TeamsManage: React.FC<TeamsManage> = ({ navigation }) => {
  //const [userData, setUserData] = useState()

  const { userData } = useUserData()

  useEffect(() => {
    // AsyncStorage.getItem('userId').then((userId) =>
    //   getUserById(userData)
    //     .then((user) => {
    //       setUserData(user)
    //     })
    //     .catch(() =>
    //       Alert.alert(
    //         'Algo deu errado!',
    //         'Verifique sua conexão com a internet ou tente novamente mais tarde'
    //       )
    //     )
    // )
  }, [])

  return (
    <MainTemplate
      title="Times que gerencio"
      goBackScreen={() => Navigations.goBackScreen(navigation)}
    >
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <MenuListContainer>
        <MenuList>
          {userData &&
            userData.teamManage.map((team) => {
              return (
                <MenuListItem
                  key={team.id}
                  title={team.name}
                  onPress={() =>
                    Navigations.navigateToScreen(
                      navigation,
                      'Team Details',
                      team
                    )
                  }
                />
              )
            })}
        </MenuList>
      </MenuListContainer>
    </MainTemplate>
  )
}
