import { MainContainer, MenuListContainer } from './styles'
import { HeaderDefault } from '../../components/HeaderDefault'
import { MenuList } from '../../components/MenuList'
import { MenuListItem } from '../../components/MenuListItem'
import { MainTemplate } from '../../templates/MainTemplate'
import { Navigations } from '../../utils/navigations'

export default function MyTeams({ navigation }) {
  return (
    <MainTemplate
      title="Meus Times"
      goBackScreen={() => Navigations.goBackScreen(navigation)}
    >
      <MenuListContainer>
        <MenuList>
          <MenuListItem
            icon={require('./../../../assets/icons/clipboard.png')}
            title="Times que gerencio"
            onPress={() =>
              Navigations.navigateToScreen(navigation, 'Teams Manage')
            }
          />
          <MenuListItem
            icon={require('./../../../assets/icons/handshake.png')}
            title="Times que faço parte"
            onPress={() =>
              Navigations.navigateToScreen(navigation, 'Teams Part Of')
            }
          />
        </MenuList>
      </MenuListContainer>
    </MainTemplate>
  )
}
