import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import HomeIcon from '../../../assets/icons/Home.svg'
import { Circle, Path, Svg } from 'react-native-svg'
import { UserAvatar } from '../../components/UserAvatar'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
      <UserAvatar size={50} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
