import React, { useState } from 'react'
import { MainContainer } from './styles'
import { Icon, Input, Pressable, Stack } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import theme from '../../../global/theme'
import { Ionicons } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { InputDefault } from '../../../components/Form/InputDefault'

export const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPasswordCLick = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <MainContainer>
        {/* <InputDefault
          leftIconName="person"
          iconSize={24}
          placeholder="Nome completo"
          errorMessage="Erro"
        />
        <InputDefault
          leftIconName="alternate-email"
          iconSize={24}
          placeholder="Nome de usuário"
          autoCapitalize="none"
        />
        <InputDefault
          keyboardType="email-address"
          autoCapitalize="none"
          leftIconName="email"
          iconSize={24}
          placeholder="E-mail"
        />
        <InputDefault
          secureTextEntry={!showPassword}
          leftIconName="lock"
          rightIconName={showPassword ? 'visibility' : 'visibility-off'}
          onPressRightIconName={handleShowPasswordCLick}
          iconSize={24}
          placeholder="Senha"
        /> */}
      </MainContainer>
    </>
  )
}
