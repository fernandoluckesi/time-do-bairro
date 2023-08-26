import { NavigationContainer } from '@react-navigation/native'
import { TabRoutes } from './tab.routes'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Login'

const Stack = createStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
