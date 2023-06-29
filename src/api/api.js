import axios from "axios"

export const base_url = 'https://social-network.samuraijs.com/api/1.0/'

export const instance = axios.create({
  withCredentials: true,
  baseURL: base_url,
  headers: {
    'API-KEY': 'cf227a27-a1c5-4180-aeb4-398db442d2fa'
  }
})

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  async followUser(id) {
    return instance.post(`follow/${id}`, {})
      .then(response => {
        return response
      })
  },
  async unFollowUser(id) {
    return instance.delete(`follow/${id}`)
      .then(response => {
        return response
      })
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
      .then(response => {
        return response
      })
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(response => {
        return response
      })

  }
}