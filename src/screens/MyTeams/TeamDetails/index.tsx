import React, { useEffect } from 'react'
import { MainTemplate } from '../../../templates/MainTemplate'
import { Image, Text } from 'react-native'
import { AddButtonContainer, TeamImageContainer } from './styles'
import { MenuListItem } from '../../../components/MenuListItem'
import { MenuList } from '../../../components/MenuList'
import { ButtonDefault } from '../../../components/ButtonDefault'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../../global/theme'
import { UserAvatar } from '../../../components/UserAvatar'

const mockTeam = {
  id: 1,
  adm: {
    userId: 2,
  },
  name: 'Inter de Meião',
  userName: '@inter.meiao',
  totalPlayers: 10,
  totalGames: 15,
  totalGoals: 165,
  whereAndWhenTheyPLay: [
    {
      where:
        'Sport Gaúcho - Rua Coronel Mario de Azevedo, 151 - São Paulo, SP CEP: 02710-020',
      when: 'Todas as segundas-feiras as 18h',
    },
  ],
  soccerCourts: [
    {
      id: 1,
      name: 'Sport Gaúcho',
      price: 500.0,
      location: {
        cep: '02710-020',
        address: 'Rua Coronel Mario de Azevedo',
        number: 151,
        complement: '',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
      },
    },
  ],
  players: [
    {
      userId: 1,
      positionInTeam: 'Goleiro(a)',
      rate: 6.4,
      goals: 15,
    },
    {
      userId: 2,
      positionInTeam: 'Zagueiro(a)',
      rate: 6.4,
      goals: 15,
    },
    {
      userId: 3,
      positionInTeam: 'Meio-campista',
      rate: 7.2,
      goals: 10,
    },
    {
      userId: 4,
      positionInTeam: 'Atacante',
      rate: 8.7,
      goals: 25,
    },
    {
      userId: 5,
      positionInTeam: 'Zagueiro(a)',
      rate: 6.8,
      goals: 5,
    },
    {
      userId: 6,
      positionInTeam: 'Meio-campista',
      rate: 7.9,
      goals: 12,
    },
    {
      userId: 7,
      positionInTeam: 'Goleiro(a)',
      rate: 6.1,
      goals: 2,
    },
    {
      userId: 8,
      positionInTeam: 'Atacante',
      rate: 8.2,
      goals: 18,
    },
    {
      userId: 9,
      positionInTeam: 'Meio-campista',
      rate: 7.6,
      goals: 8,
    },
    {
      userId: 10,
      positionInTeam: 'Zagueiro(a)',
      rate: 6.6,
      goals: 7,
    },
  ],
}

export const TeamDetails: React.FC = ({ navigation, route }) => {
  useEffect(() => {
    console.log({ route: route.params })
  }, [])

  const goBackScreen = () => {
    navigation.goBack()
  }

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <MainTemplate
      goBackScreen={goBackScreen}
      title={route.params.name}
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
