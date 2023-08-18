import React from 'react'
import { MainTemplate } from '../../../templates/MainTemplate'
import { Text } from 'react-native'

export const TeamDetails: React.FC = ({ navigation, route }) => {
  const goBackScreen = () => {
    navigation.goBack()
  }

  return (
    <MainTemplate goBackScreen={goBackScreen} title={route.params.teamName}>
      <Text>Detalhes do time</Text>
    </MainTemplate>
  )
}
