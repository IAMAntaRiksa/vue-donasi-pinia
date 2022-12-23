import { defineStore } from "pinia";
import Api from '../api/Api';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: {}
    }),
    actions: {
        async getProfileData() {
            try {
                const token = localStorage.getItem('token')
                const { data } = await Api.get('/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                this.profile = data.data
            } catch (error) {
                console.log(error)
            }
        },
        async udateProfileDta(payload) {
            try {
                const token = localStorage.getItem('token')
                const { data } = await Api.post('/profile', payload, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                this.profile = data.data
            } catch (error) {
                if (error.response.status === 400) {
                    return Promise.reject(error.response.data)
                }
            }
        },

        async updatePassword(payload) {
            try {
                const token = localStorage.getItem('token')
                const { data } = await Api.post('/profile/password', payload, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                this.profile = data.data
            } catch (error) {
                if (error.response.status === 400) {
                    return Promise.reject(error.response.data)
                }
            }
        }
    },
    getters: {
        profileGetter: (state) => state.profile
    }
})