import React from 'react'
import { MainTemplate } from '../../templates/MainTemplate'
import { MainContainer } from './styles'
import { NavigationProp } from '@react-navigation/native'

interface NotificationsProps {
  navigation: NavigationProp<any>
}

export const Notifications: React.FC<NotificationsProps> = ({ navigation }) => {
  const goBackScreen = () => {
    navigation.goBack()
  }
  return (
    <MainTemplate title="Notificações" goBackScreen={goBackScreen}>
      <MainContainer></MainContainer>
    </MainTemplate>
  )
}
