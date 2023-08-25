import React from 'react'
import { MainContainer } from './styles'
import { Text, TouchableOpacity } from 'react-native'

export const Login: React.FC = ({ navigation }) => {
  const handleLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    })
  }
  return (
    <MainContainer>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </MainContainer>
  )
}
