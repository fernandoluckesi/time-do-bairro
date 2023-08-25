import React from 'react'
import { MainTemplate } from '../../../templates/MainTemplate'
import { Image, Text } from 'react-native'
import { AddButtonContainer, TeamImageContainer } from './styles'
import { MenuListItem } from '../../../components/MenuListItem'
import { MenuList } from '../../../components/MenuList'
import { ButtonDefault } from '../../../components/ButtonDefault'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../../global/theme'
import { UserAvatar } from '../../../components/UserAvatar'

export const TeamDetails: React.FC = ({ navigation, route }) => {
  const goBackScreen = () => {
    navigation.goBack()
  }

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <MainTemplate
      goBackScreen={goBackScreen}
      title={route.params.teamName}
      sourceRightIcon={
        <MaterialIcons name="edit" size={24} color={theme.colors.textLight} />
      }
    >
      <TeamImageContainer>
        <UserAvatar
          size={80}
          source={require('../../../../assets/images/team-perfil.jpg')}
          color={theme.colors.primary}
        />
      </TeamImageContainer>
      <MenuList>
        <MenuListItem
          icon={require('../../../../assets/icons/soccer-player-running-icon.png')}
          title="Jogadores"
          onPress={() => navigateToScreen('My Teams Tab')}
        />
        <MenuListItem
          icon={require('../../../../assets/icons/dollar-icon.png')}
          title="Pagamentos"
          onPress={() => navigateToScreen('My Teams Tab')}
        />
        <MenuListItem
          icon={require('../../../../assets/icons/dice-icon.png')}
          title="Sortear jogo"
          onPress={() => navigateToScreen('My Teams Tab')}
        />
        <MenuListItem
          icon={require('../../../../assets/icons/soccer-ball-icon.png')}
          title="Jogos"
          onPress={() => navigateToScreen('My Teams Tab')}
        />
        <MenuListItem
          icon={require('../../../../assets/icons/soccer-field-icon.png')}
          title="Quadras"
          onPress={() => navigateToScreen('My Teams Tab')}
        />
      </MenuList>
      <AddButtonContainer>
        <ButtonDefault
          backgroundColor="primary"
          text="Adicionar jogador(a)"
          iconChildren={
            <MaterialIcons
              name="add"
              size={24}
              color={theme.colors.textLight}
            />
          }
        />
      </AddButtonContainer>
    </MainTemplate>
  )
}
