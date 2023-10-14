import styled from 'styled-components/native'

export const MainContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shapeLight};
  border-radius: 8px;
  margin-top: 24px;
  flex: 1;
  height: 100%;
`

export const NotificationsList = styled.FlatList``

export const NotificationItem = styled.View`
  border: 1px solid green;
  height: 50px;
  justify-content: center;
`

export const InvolvedButton = styled.TouchableOpacity`
  border: 1px solid red;
  justify-content: center;
  padding: 0;
  margin: 0;
`

export const InvolvedName = styled.Text`
  font-size: 16px;
`

export const NotificationText = styled.Text`
  justify-content: center;
  border: 1px solid blue;
  padding: 0;
  font-size: 16px;
`
