import axios from "axios"

export const base_url = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
  withCredentials: true,
  baseURL: base_url,
  headers: {
    'API-KEY': 'cf227a27-a1c5-4180-aeb4-398db442d2fa'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  }
} 
