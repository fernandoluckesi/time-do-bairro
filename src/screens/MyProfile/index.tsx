import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { MainTemplate } from '../../templates/MainTemplate'
import {
  ExitButtonContainer,
  MainContainer,
  UserAvatarContainer,
  UserInfosContainer,
  UserInfosHeader,
  UserInfosSubtitle,
  UserInfosTitle,
} from './styles'
import { UserAvatar } from '../../components/UserAvatar'
import { InfosTable } from '../../components/InfosTable'
import theme from '../../global/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonDefault } from '../../components/ButtonDefault'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function MyProfile({ navigation }) {
  const goBackScreen = () => {
    navigation.goBack()
  }

  const dataTable = [
    {
      leftColumn: 'Posição',
      rightColumn: 'Goleiro',
    },
    {
      leftColumn: 'Total de gols',
      rightColumn: 25,
    },
    {
      leftColumn: 'Time(s) que participa',
      rightColumn: [
        { id: 1, name: 'Inter de Meião' },
        { id: 2, name: 'Bigode Grosso Futebol e Samba' },
      ],
      isList: true,
      colorRightColumn: 'primary',
      onPress: () => null,
    },
    {
      leftColumn: 'Time(s) que administra',
      rightColumn: [
        { id: 1, name: 'Inter de Meião' },
        { id: 2, name: 'Bigode Grosso Futebol e Samba' },
      ],
      isList: true,
      colorRightColumn: 'primary',
      onPress: () => null,
      lastLine: true,
    },
  ]
  return (
    <MainTemplate
      title="Meu perfil"
      goBackScreen={goBackScreen}
      sourceRightIcon={
        <MaterialIcons name="edit" size={24} color={theme.colors.textLight} />
      }
    >
      <UserAvatarContainer>
        <UserAvatar
          size={100}
          source={require('../../../assets/images/profile-img.jpg')}
          color={theme.colors.primary}
        />
      </UserAvatarContainer>

      <UserInfosContainer>
        <UserInfosHeader>
          <UserInfosTitle>Luiz Fernando</UserInfosTitle>
          <UserInfosSubtitle>@luiz.fernando</UserInfosSubtitle>
        </UserInfosHeader>
        <InfosTable dataTable={dataTable} />
      </UserInfosContainer>
      <ExitButtonContainer>
        <ButtonDefault
          backgroundColor="alert"
          text="Sair"
          iconChildren={
            <MaterialCommunityIcons
              name="location-exit"
              size={24}
              color={theme.colors.shapeLight}
            />
          }
        />
      </ExitButtonContainer>
    </MainTemplate>
  )
}
