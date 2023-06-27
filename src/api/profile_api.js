import { instance } from "./api"


export const profileAPI = {

  async getProfile(id) {
    return instance.get(`profile/${id}`)
      .then(response => {
        return response
      })
  },
  async getStatus(id) {
    return instance.get(`profile/status/${id}`)
      .then(response => {
        return response
      })
  },
  async updateStatus(status) {
    return instance.put(`profile/status`, { status })
      .then(response => {
        return response
      })
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}