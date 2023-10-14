import React from 'react'
import { MainTemplate } from '../../templates/MainTemplate'
import {
  InvolvedButton,
  InvolvedName,
  MainContainer,
  NotificationItem,
  NotificationText,
  NotificationsList,
} from './styles'
import { NavigationProp } from '@react-navigation/native'

interface NotificationsProps {
  navigation: NavigationProp<any>
}

const mockData = [
  {
    id: 0,
    type: 'request',
    text: 'pediu para entrar no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 1,
    type: 'informative',
    text: 'aceitou você no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 2,
    type: 'informative',
    text: 'saiu do',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 3,
    type: 'informative',
    text: 'aceitou entrar no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 4,
    type: 'informative',
    text: 'removeu você do',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 0,
    type: 'request',
    text: 'pediu para entrar no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 1,
    type: 'informative',
    text: 'aceitou você no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 2,
    type: 'informative',
    text: 'saiu do',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 3,
    type: 'informative',
    text: 'aceitou entrar no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 4,
    type: 'informative',
    text: 'removeu você do',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 0,
    type: 'request',
    text: 'pediu para entrar no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 1,
    type: 'informative',
    text: 'aceitou você no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 2,
    type: 'informative',
    text: 'saiu do',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 3,
    type: 'informative',
    text: 'aceitou entrar no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 4,
    type: 'informative',
    text: 'removeu você do',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 0,
    type: 'request',
    text: 'pediu para entrar no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 1,
    type: 'informative',
    text: 'aceitou você no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 2,
    type: 'informative',
    text: 'saiu do',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 3,
    type: 'informative',
    text: 'aceitou entrar no',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
  {
    id: 4,
    type: 'informative',
    text: 'removeu você do',
    involved: {
      userId: 2,
      teamsId: 1,
    },
  },
]

const renderItem = () => {
  return (
    <NotificationItem>
      <NotificationText>
        <InvolvedButton>
          <InvolvedName>luiz.fernando </InvolvedName>
        </InvolvedButton>
        aceitou você no
        <InvolvedButton>
          <InvolvedName> Inter</InvolvedName>
        </InvolvedButton>
      </NotificationText>
    </NotificationItem>
  )
}
export const Notifications: React.FC<NotificationsProps> = ({ navigation }) => {
  const goBackScreen = () => {
    navigation.goBack()
  }
  return (
    <MainTemplate title="Notificações" goBackScreen={goBackScreen}>
      <MainContainer>
        <NotificationsList data={mockData} renderItem={renderItem} />
      </MainContainer>
    </MainTemplate>
  )
}
