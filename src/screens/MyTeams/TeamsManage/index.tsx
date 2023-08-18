import React from 'react'
import { MainContainer } from './styles'
import { HeaderDefault } from '../../../components/HeaderDefault'
import { MainTemplate } from '../../../templates/MainTemplate'
import { MenuList } from '../../../components/MenuList'
import { MenuListItem } from '../../../components/MenuListItem'
import { SearchBar } from '../../../components/SearchBar'

const mockTeams = [
  {
    id: 1,
    name: 'Inter de Meião',
  },
  {
    id: 2,
    name: 'Bigode Grosso Futebol e Samba',
  },
]

export const TeamsManage: React.FC = ({ navigation }) => {
  const goBackScreen = () => {
    navigation.goBack()
  }

  const navigateToScreen = (screenName, teamName) => {
    navigation.navigate(screenName, { teamName })
  }

  return (
    <MainTemplate title="Times que gerencio" goBackScreen={goBackScreen}>
      <SearchBar />
      <MenuList>
        {mockTeams.map((team) => {
          return (
            <MenuListItem
              key={team.id}
              title={team.name}
              onPress={() => navigateToScreen('Team Details', team.name)}
            />
          )
        })}
      </MenuList>
    </MainTemplate>
  )
}
