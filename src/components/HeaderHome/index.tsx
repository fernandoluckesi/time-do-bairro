import React, { useEffect, useState } from 'react'
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
import { UserData } from '../../hooks/useUserData'
import { NavigationProp } from '@react-navigation/native'

interface HeaderHomeProps {
  userData: UserData
  navigation: NavigationProp<any>
}

export const HeaderHome: React.FC<HeaderHomeProps> = ({
  userData,
  navigation,
}) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }
  return (
    <>
      <SafeAreaViewStyled />
      {userData && (
        <MainContainer>
          <Logo source={require('./../../../assets/images/logo.png')} />
          <ContentContainer>
            <PlayerContainer>
              <UserAvatar
                size={50}
                source={require('./../../../assets/images/profile-img.jpg')}
              />
              <PlayerText>
                <PlayerName>{userData.name}</PlayerName>
                <PlayerPosition>{userData.position}</PlayerPosition>
              </PlayerText>
            </PlayerContainer>
            <Notification onPress={() => navigateToScreen('Notifications')}>
              <NotificationIcon
                source={require('./../../../assets/icons/notification.png')}
              />
              <NotificationCount>
                <NotificationText>99</NotificationText>
              </NotificationCount>
            </Notification>
          </ContentContainer>
        </MainContainer>
      )}
    </>
  )
}
