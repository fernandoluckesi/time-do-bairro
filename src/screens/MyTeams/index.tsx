import { MainContainer } from './styles'
import { HeaderDefault } from '../../components/HeaderDefault'
import { MenuList } from '../../components/MenuList'
import { MenuListItem } from '../../components/MenuListItem'
import { MainTemplate } from '../../templates/MainTemplate'

export default function MyTeams({ navigation }) {
  const goBackScreen = () => {
    navigation.goBack()
  }

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <MainTemplate title="Meus Times" goBackScreen={goBackScreen}>
      <MenuList>
        <MenuListItem
          icon={require('./../../../assets/icons/clipboard.png')}
          title="Times que gerencio"
          onPress={() => navigateToScreen('Teams Manage')}
        />
        <MenuListItem
          icon={require('./../../../assets/icons/handshake.png')}
          title="Times que faço parte"
          onPress={() => navigateToScreen('Teams Part Of')}
        />
      </MenuList>
    </MainTemplate>
  )
}
