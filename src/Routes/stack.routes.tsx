import { createStackNavigator } from '@react-navigation/stack'
import { TeamsManage } from '../screens/MyTeams/TeamsManage'
import MyTeams from '../screens/MyTeams'
import { TeamsPartOf } from '../screens/MyTeams/TeamsPartOf'
import Home from '../screens/Home'
import { TeamDetails } from '../screens/MyTeams/TeamDetails'

const Stack = createStackNavigator()

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="My Teams" component={TeamsManage} />
    </Stack.Navigator>
  )
}

export function MyTeamsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="My Teams"
    >
      <Stack.Screen name="My Teams" component={MyTeams} />
      <Stack.Screen name="Teams Manage" component={TeamsManage} />
      <Stack.Screen name="Teams Part Of" component={TeamsPartOf} />
      <Stack.Screen name="Team Details" component={TeamDetails} />
    </Stack.Navigator>
  )
}
