import { defineStore } from 'pinia'
import Api from '../api/Api'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        category: {},
        campaigns: []
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
        async getCategoriesData() {
            try {
                const { data } = await Api.get('/category')
                this.categories = data.data.data
            } catch (error) {
                console.log(error)
            }
        },
        async detailCategoryData(slug) {
            try {
                const { data } = await Api.get(`/category/${slug}`)
                this.category = data.data
                this.campaigns = data.data.campaigns
            } catch (error) {
                console.log(error)
            }
        },
    },

    getters: {
        categoriesMenuGetter: (state) => state.categories,
        categoriesGetter: (state) => state.categories,
        detailCategoryGetter: (state) => state.category
    }
})