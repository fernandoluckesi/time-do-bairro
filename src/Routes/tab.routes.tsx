import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Search from '../screens/Search'
import AddPlayer from '../screens/AddPlayer'
import MyTeams from '../screens/MyTeams'
import MyProfile from '../screens/MyProfile'
import { Foundation } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { UserAvatar } from '../components/UserAvatar'
import { HomeStack, MyTeamsStack } from './stack.routes'

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarActiveTintColor: '#FF7A01',
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
        name="My Profile"
        component={MyProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserAvatar
              size={30}
              color={color}
              source={require('../../assets/icons/profile-img.jpg')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
