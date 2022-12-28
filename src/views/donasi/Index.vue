<template>
    <div class="pb-20 pt-20">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">
            <div class="bg-white rounded-md shadow-md p-5">
                <div class="text-xl">RIWAYAT DONASI SAYA</div>
                <div class="border-2 border-gray-200 mt-3 mb-2"></div>
                <Suspense>
                    <template #default>
                        <Donation />
                    </template>

                    <template #fallback>
                        Loading...
                    </template>
                </Suspense>
            </div>
        </div>
    </div>
</template>
<script>
import Donation from '../../components/DonationCart.vue';
export default {
    components: {
        Donation,
    },
};
</script>

<style>

</style>
