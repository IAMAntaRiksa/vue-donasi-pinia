import { defineStore } from 'pinia'
import Api from '../api/Api'

export const useCampaignStore = defineStore('campaign', {
    state: () => ({
        campaigns: [],
        campaign: {},
        subDonation: [],
        donations: [],
        user: {}
    }),

    actions: {
        async getCampaignsData() {
            try {
                const { data } = await Api.get('/campaign')
                this.campaigns = data.data.data
            } catch (error) {
                console.log(error)
            }
        },

        async getDetilCampaignData(slug) {
            try {
                const { data } = await Api.get(`/campaign/${slug}`)
                this.campaign = data.data
                this.subDonation = data.data.sum_donation
                this.donations = data.donations
                this.user = data.data.user
            } catch (error) {
                console.log(error)
            }
        },
    },
    getters: {
        campaignGetter: (state) => state.campaigns,
        detailCampaignGetter: (state) => state.campaign,
        donationsGetter: (state) => state.donations
    }
})