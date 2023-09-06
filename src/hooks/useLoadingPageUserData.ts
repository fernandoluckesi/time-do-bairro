import { useState, useEffect } from 'react'
import { getUserById } from '../Services/apis'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface TeamsOfUser {
  id: number
  name: string
}

export interface UserData {
  id: number
  name: string
  userName: string
  position: string
  totalGoals: number
  teamOfPart: TeamsOfUser[]
  teamManage: TeamsOfUser[]
}

export const useLoadingPageUserData = () => {
  const [userData, setUserData] = useState<UserData | null>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    AsyncStorage.getItem('userId')
      .then((userId) => {
        getUserById(parseInt(userId))
          .then((data) => {
            setUserData(data)
            setIsLoading(false)
          })
          .catch(() => {
            setUserData(null)
          })
      })
      .catch(() => {
        setUserData(null)
      })
  }, [])

  return {
    userData,
    isLoading,
  }
}
