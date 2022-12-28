import { defineStore } from 'pinia'
import Api from '../api/Api';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || "",
    }),

    actions: {
        async register(payload) {
            return new Promise((resolve, reject) => {
                Api.post('/register', payload)
                    .then((response) => {
                        const token = response.data.token
                        const user = response.data.data

                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user))

                        Api.defaults.headers.common['Authorization'] = "Bearer " + token

                        this.token = true

                        resolve()

                    }).catch((error) => {
                        reject(error.response.data)
                    });
            });
        },

        async getUser() {
            try {
                const token = localStorage.getItem('token')
                const { data } = await Api.get('/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.token = data
            } catch (error) {
                console.log(error)
            }
        },

        async login(credential) {
            return new Promise((resolve, reject) => {
                Api.post('login', credential).then((response) => {

                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('user', JSON.stringify(response.data.data))
                    this.token = true
                    resolve()
                }).catch((error) => {
                    reject(error.response.data)
                });
            });
        },

        async logout() {

            return new Promise((resolve, reject) => {
                //commit ke mutation AUTH_LOGOUT
                this.token = ""

                //remove value dari localStorage
                localStorage.removeItem('token')
                localStorage.removeItem('user')

                //delete header axios
                delete Api.defaults.headers.common['Authorization']

                //return resolve ke component 
                resolve()
            });
        }
    },
    getters: {
        isUser: (state) => state.token,
        isLoggedIn: (state) => state.token != false
    }
})