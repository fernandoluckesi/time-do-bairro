import React from 'react'
import {
  ContentContainer,
  Logo,
  MainContainer,
  NotificationIcon,
  PlayerContainer,
  PlayerName,
  Notification,
  PlayerPosition,
  PlayerText,
  SafeAreaViewStyled,
  NotificationCount,
  NotificationText,
} from './styles'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { UserAvatar } from '../UserAvatar'

export const HeaderHome: React.FC = () => {
  return (
    <>
      <SafeAreaViewStyled />
      <MainContainer>
        <Logo source={require('./../../../assets/images/logo.png')} />
        <ContentContainer>
          <PlayerContainer>
            <UserAvatar
              size={50}
              source={require('./../../../assets/icons/profile-img.jpg')}
            />
            <PlayerText>
              <PlayerName>Luiz Fernando</PlayerName>
              <PlayerPosition>Goleiro</PlayerPosition>
            </PlayerText>
          </PlayerContainer>
          <Notification>
            <NotificationIcon
              source={require('./../../../assets/icons/notification.png')}
            />
            <NotificationCount>
              <NotificationText>99</NotificationText>
            </NotificationCount>
          </Notification>
        </ContentContainer>
      </MainContainer>
    </>
  )
}
