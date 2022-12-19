import { defineStore } from 'pinia'
import Api from '../api/Api'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
    }),

    actions: {
        async getCategoriesMenuData() {
            try {
                const { data } = await Api.get('/categoryHome')
                this.categories = data.data
            } catch (error) {
                console.log(error)
            }
        },
    },

    getters: {
        categoriesMenuGetter: (state) => state.categories
    }
})