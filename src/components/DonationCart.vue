<template>
    <div v-if="donations.length > 0">
        <div class="mt-5 grid grid-cols-4 gap-4">
            <div class="col-span-4" v-for="donation in donations" :key="donation.id">
                <div class="bg-gray-200 rounded-md shadow-sm p-2">
                    <figure class="md:flex rounded-xl md:p-0">
                        <img class="w-full h-34 md:w-48 rounded mx-auto object-cover" :src="donation.campaign.image"
                            alt="" width="384" height="512" />
                        <div class="w-full pt-6 p-5 md:p-3 text-center md:text-left space-y-4">
                            <a href="">
                                <p class="text-sm font-semibold">
                                    {{ donation.campaign.title }}
                                </p>
                            </a>
                            <figcaption class="font-medium">
                                <p class="text-xs text-gray-500 mt-5">
                                    <span class="font-bold text-gray-500 mr-3">
                                        {{ donation.created_at }}
                                    </span>
                                    <span class="font-bold text-blue-900">
                                        Rp. {{ formatPrice(donation.amount) }}
                                    </span>
                                </p>
                            </figcaption>
                            <div v-if="donation.status == 'pending'">
                                <button @click="payment(donation.snap_token)"
                                    class="w-full bg-yellow-600 rounded shadow-sm text-xs py-1 px-2 focus:outline-none">
                                    BAYAR SEKARANG
                                </button>
                            </div>
                        </div>
                        <div class="ml-auto text-sm text-gray-500 underline">
                            <div v-if="donation.status == 'success'">
                                <button
                                    class="bg-green-500 border-2 border-green-500 rounded shadow-sm text-xs py-1 px-2 text-black focus:outline-none">
                                    Berhasil
                                </button>
                            </div>
                            <div v-else-if="donation.status == 'pending'">
                                <button
                                    class="bg-yellow-500 border-2 border-yellow-500 rounded shadow-sm text-xs py-1 px-2 text-black focus:outline-none">
                                    Pending
                                </button>
                            </div>
                            <div v-else-if="donation.status == 'expired'">
                                <button
                                    class="bg-red-500 border-2 border-red-500 rounded shadow-sm text-xs py-1 px-2 text-black focus:outline-none">
                                    Dibatalkan
                                </button>
                            </div>
                            <div v-else-if="donation.status == 'failed'">
                                <button
                                    class="bg-red-500 border-2 border-red-500 rounded shadow-sm text-xs py-1 px-2 text-black focus:outline-none">
                                    Dibatalkan
                                </button>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="mb-3 bg-red-500 text-white p-4 rounded-md">
            Anda Belum Memiliki Transaksi Donasi Saat ini!
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useDonationStore } from '../stores/donation';
export default {
    setup() {
        const store = useDonationStore();

        onMounted(() => {
            store.getDonationsData();
        });

        const donations = computed(() => {
            return store.donatioGetter;
        });

        return {
            donations,
        };
    },
}
</script>

<style>

</style>