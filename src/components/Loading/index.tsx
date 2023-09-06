import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import theme from '../../global/theme'

interface LoadingProps {
  size?: number
  color?: string
}

const Loading: React.FC<LoadingProps> = ({ size = 50 }) => {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="rotate"
        duration={1500}
        easing="linear"
        iterationCount="infinite"
        style={[
          styles.spinner,
          { width: size, height: size, borderColor: theme.colors.primary },
        ]}
      ></Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  spinner: {
    borderWidth: 2,
    borderRadius: 50,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
})

export default Loading
