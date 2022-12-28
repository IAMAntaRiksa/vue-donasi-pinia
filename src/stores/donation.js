import { defineStore } from 'pinia'
import Api from '../api/Api'

export const useDonationStore = defineStore('donation', {
    state: () => ({
        donations: []
    }),
    actions: {
        async getDonationsData() {
            try {
                const token = localStorage.getItem('token')
                const { data } = await Api.get('/donation', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                this.donations = data.data.data
            } catch (error) {
                console.log(error)
            }
        },
        //storeDonation
        storeDonation(data) {
            return new Promise((resolve, reject) => {
                //get data token dan user
                const token = localStorage.getItem('token')
                //set axios header dengan type Authorization + Bearer token
                Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                //send data donatiion ke server
                Api.post('/donation', data)
                    .then(response => {
                        this.donations = ''
                        resolve(response)
                    }).catch(error => {
                        reject(error.response.data)
                    })
            })
        }
    },
    getters: {
        donatioGetter: (state) => state.donations
    }
})