import { Text } from 'react-native'

import { MainContainer, MenuListContainer } from './styles'
import { HeaderHome } from '../../components/HeaderHome'
import { MenuList } from '../../components/MenuList'
import { MenuListItem } from '../../components/MenuListItem'

export default function Home({ navigation }) {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }
  return (
    <MainContainer>
      <HeaderHome />
      <MenuListContainer>
        <MenuList>
          <MenuListItem
            icon={require('./../../../assets/icons/team-fill.png')}
            title="Meus times"
            subtitle="Gerenciar times"
            onPress={() => navigateToScreen('My Teams Tab')}
          />
          <MenuListItem
            icon={require('./../../../assets/icons/search-icon.png')}
            title="Pesquisar"
            subtitle="Pesquisar por times, quadras ou jogador(a)s"
          />
          <MenuListItem
            icon={require('./../../../assets/icons/user-icon.png')}
            title="Meu perfil"
            subtitle="Visualizar e editar perfil"
            onPress={() => navigateToScreen('My Profile Tab')}
          />
        </MenuList>
      </MenuListContainer>
    </MainContainer>
  )
}
