import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from '../screens/Search'
import AddPlayer from '../screens/AddPlayer'
import { Foundation } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { UserAvatar } from '../components/UserAvatar'
import { HomeStack, MyProfileStack, MyTeamsStack } from './stack.routes'
import theme from '../global/theme'

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: '#CECECE',
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home Tab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="search" color={color} size={30 * 1.2} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Player"
        component={AddPlayer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color="#8DC73F" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="My Teams Tab"
        component={MyTeamsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="group" color={color} size={30 * 0.8} />
          ),
        }}
      />
      <Tab.Screen
        name="My Profile Tab"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserAvatar
              size={30}
              color={color}
              source={require('../../assets/images/profile-img.jpg')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
