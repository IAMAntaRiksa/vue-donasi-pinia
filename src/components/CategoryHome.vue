<template>
    <div>
        <div v-if="categories.length > 0">
            <div class="mt-5 grid grid-cols-4  gap-4 md:gap-4 text-center items-center">
                <div v-for="category in categories" :key="category.id"
                    class="col-span-2 md:col-span-2 lg:col-span-1 bg-white rounded-md shadow-md p-4 text-center text-xs">
                    <a href="">
                        <div>
                            <img :src="category.image" width="40" class="inline-block mb-2">
                        </div>
                        {{ category.name.toUpperCase() }}
                    </a>
                </div>
                <div
                    class="col-span-2 md:col-span-1 lg:col-span-1 bg-white rounded-md shadow-md p-4 text-center text-xs">
                    <a href="">
                        <div>
                            <img src="@/assets/images/menu.png" width="40" class="inline-block mb-2">
                        </div>
                        LAINNYA
                    </a>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="mt-5 grid grid-cols-4  gap-4 md:gap-4 text-center items-center">
                <div v-for="index in 4" :key="index"
                    class="sm:col-span-2 md:col-span-2 lg:col-span-2 bg-white rounded-md shadow-md text-center text-xs">
                    <ContentLoader />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Hooks
import { computed, onMounted } from '@vue/runtime-core';
// pinia
import { useCategoryStore } from '../stores/category';
//vue content loader
import { ContentLoader } from 'vue-content-loader'
export default {

    components: {
        ContentLoader,
    },
    setup() {
        const store = useCategoryStore()

        onMounted(() => {
            store.getCategoriesMenuData()
        })

        const categories = computed(() => {
            return store.categoriesMenuGetter
        })

        return {
            categories
        }
    }
}
</script>

<style>

</style>