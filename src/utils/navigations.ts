const goBackScreen = (navigation) => {
  navigation.goBack()
}

const navigateToScreen = (navigation, screenName, params) => {
  navigation.navigate(screenName, params)
}

export const Navigations = {
  goBackScreen,
  navigateToScreen,
}
