import { defineStore } from 'pinia'
import Api from '../api/Api'

export const useSliderStore = defineStore('slider', {
    state: () => ({
        sliders: [],
    }),

    actions: {
        async getSlidersData() {
            try {
                const { data } = await Api.get('/slider')
                console.log(data.data)
                this.sliders = data.data
            } catch (error) {
                console.log(error)
            }
        },
    },

    getters: {
        sliderGetter: (state) => state.sliders
    }
})