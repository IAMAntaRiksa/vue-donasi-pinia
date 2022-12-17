<template>
    <div class="pb-20 pt-20">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">

            <!-- slider -->
            <div class="grid grid-cols-1 bg-white rounded shadow-md p-1 text-sm">
                <Slider />
            </div>
            <!-- categoryHome -->
            <CategoryHome />

        </div>
    </div>
</template>
<script>
import CategoryHome from '../../components/CategoryHome.vue';
import Slider from '../../components/Slider.vue';
export default {
    components: {
        CategoryHome,
        Slider,
    }
}
</script>

<style>

</style>