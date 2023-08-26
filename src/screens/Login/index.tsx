import React from 'react'
import {
  Header,
  HeaderBackdrop,
  Logo,
  MainContainer,
  TabNavigatorContainer,
} from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import theme from '../../global/theme'

const Tab = createMaterialTopTabNavigator()

export const Login: React.FC = ({ navigation }) => {
  const handleLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    })
  }
  return (
    <MainContainer>
      <Header source={require('../../../assets/images/stadium.png')}>
        <HeaderBackdrop></HeaderBackdrop>
        <Logo
          resizeMode="contain"
          source={require('../../../assets/images/logo-login-screen.png')}
        />
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Header>
      <TabNavigatorContainer>
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
      </TabNavigatorContainer>
    </MainContainer>
  )
}
