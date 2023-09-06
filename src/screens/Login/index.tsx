// ios google auth id 187276224942-86osqj92hkhvccv67f658aiporln2ml9.apps.googleusercontent.com
// android google auth id 187276224942-vq0rrtcriudafnap668uno1oj3f129m9.apps.googleusercontent.com

// const [request, response, promptAsync] = Google.useAuthRequest({
//   androidClientId:
//     '87276224942-vq0rrtcriudafnap668uno1oj3f129m9.apps.googleusercontent.com',
//   iosClientId:
//     '187276224942-86osqj92hkhvccv67f658aiporln2ml9.apps.googleusercontent.com',
// })

// useEffect(() => {
//   handleSingInWithGoogle()
// }, [response])

// const handleSingInWithGoogle = async () => {
//   const user = await AsyncStorage.getItem('@user')
//   if (!user) {
//     if (response?.type === 'success') {
//       await getUserInfo(response.authentication.accessToken)
//     }
//   } else {
//     setuserInfo(JSON.parse(user))
//   }
// }

// const getUserInfo = async (token) => {
//   if (!token) return
//   try {
//     const response = await fetch(
//       'https://www.googleapis.com/userinfo/v2/me',
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     )

//     const user = await response.json()
//     console.log({ user })
//     await AsyncStorage.setItem('@user', JSON.stringify(user))
//   } catch (error) {}
// }

{
  /* <TabNavigatorContainer>
        <Tab.Navigator
          initialRouteName="Sign Up"
          screenOptions={{
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.inactive,
            tabBarIndicatorStyle: { backgroundColor: theme.colors.primary },
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: theme.fonts.semiBold,
            },
          }}
        >
          <Tab.Screen
            name="Sign Up"
            component={SignUp}
            options={{
              tabBarLabel: 'Criar Conta',
            }}
          />
          <Tab.Screen
            name="Sign In"
            component={SignIn}
            options={{
              tabBarLabel: 'Entrar',
            }}
          />
        </Tab.Navigator>
      </TabNavigatorContainer> */
}

import React, { useEffect, useState } from 'react'
import {
  Header,
  HeaderBackdrop,
  LoginButton,
  LoginButtonIcon,
  LoginButtonText,
  LoginButtonsContainer,
  Logo,
  MainContainer,
  TabNavigatorContainer,
  TermsOfUseAndPrivacyText,
  TermsOfUseAndPrivacyTextEmphasis,
} from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import theme from '../../global/theme'
import { getUserByUserName } from '../../Services/apis'

import { NavigationProp } from '@react-navigation/native'
import { InputDefault } from '../../components/Form/InputDefault'

const Tab = createMaterialTopTabNavigator()

interface LoginProps {
  navigation: NavigationProp<any>
}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [loggedIn, setloggedIn] = useState(false)
  const [userInfo, setuserInfo] = useState([])
  const [userName, setUserName] = useState('')

  const handleLogin = async () => {
    try {
      const user = await getUserByUserName('fernando.ferfa')
      if (user) {
        await AsyncStorage.setItem('userId', JSON.stringify(user.id))
      }

      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      })
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Algo deu errado!',
        'Verifique sua conexão com a internet ou tente novamente mais tarde'
      )
    }
  }

  const handleInputUserName = (value) => {
    setUserName(value)
  }

  return (
    <MainContainer>
      <Header source={require('../../../assets/images/stadium.png')}>
        <HeaderBackdrop />
        <Logo
          resizeMode="contain"
          source={require('../../../assets/images/logo-login-screen.png')}
        />
      </Header>

      <TermsOfUseAndPrivacyText>
        Ao tocar em entrar, você concorda com os nossos{' '}
        <TermsOfUseAndPrivacyTextEmphasis>
          Termos
        </TermsOfUseAndPrivacyTextEmphasis>
        . Saiba . como processamos seus dados em nossa{' '}
        <TermsOfUseAndPrivacyTextEmphasis>
          Política de Privacidade
        </TermsOfUseAndPrivacyTextEmphasis>{' '}
        e{' '}
        <TermsOfUseAndPrivacyTextEmphasis>
          Política de Cookies
        </TermsOfUseAndPrivacyTextEmphasis>
        .
      </TermsOfUseAndPrivacyText>

      <TouchableOpacity onPress={handleLogin}>
        <InputDefault
          leftIconName="alternate-email"
          iconSize={24}
          placeholder="Nome de usuário"
          onChangeText={handleInputUserName}
          autoCapitalize="none"
        />

        <Text>Login</Text>
      </TouchableOpacity>

      <LoginButtonsContainer>
        <LoginButton borderColor={theme.colors.shapeDark}>
          <LoginButtonIcon
            source={require('../../../assets/icons/google-icon.png')}
          />
          <LoginButtonText>ENTRAR COM GOOGLE</LoginButtonText>
        </LoginButton>
        <LoginButton
          borderColor={theme.colors.shapeDark}
          backgroundColor={theme.colors.shapeDark}
        >
          <LoginButtonIcon
            source={require('../../../assets/icons/apple-icon.png')}
          />
          <LoginButtonText textColor={theme.colors.textLight}>
            ENTRAR COM A APPLE
          </LoginButtonText>
        </LoginButton>
        <LoginButton borderColor="#3C5A98" backgroundColor="#3C5A98">
          <LoginButtonIcon
            source={require('../../../assets/icons/facebook-icon.png')}
          />
          <LoginButtonText textColor={theme.colors.textLight}>
            ENTRAR COM O FACEBOOK
          </LoginButtonText>
        </LoginButton>
      </LoginButtonsContainer>
    </MainContainer>
  )
}
