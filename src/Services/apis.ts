import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const getUserByUserName = async (userName: string) => {
  try {
    const user = await axios.get(`${BASE_URL}/users`, {
      params: {
        userName,
      },
    })

    return user.data[0]
  } catch (error) {
    throw error
  }
}

export const getUserById = async (id: number) => {
  try {
    const user = await axios.get(`${BASE_URL}/users`, {
      params: {
        id,
      },
    })

    return user.data[0]
  } catch (error) {
    throw error
  }
}
