<template>
    <div>
        <div v-if="sliders.length > 0">
            <vueper-slides slide-image-inside autoplay>
                <template v-slot:arrow-left>
                    <i class="icon icon-arrow-left" />
                </template>
                <vueper-slide v-for="slider in sliders" :key="slider.id" :image="slider.image" />
                <template v-slot:arrow-right>
                    <i class="icon icon-arrow-right" />
                </template>
            </vueper-slides>
        </div>
        <div v-else>
            <ContentLoader />
        </div>
    </div>
</template>


<script>
// Hooks
import { computed, onMounted } from '@vue/runtime-core';

// Pinia
import { useSliderStore } from '../stores/slider';

//vueper slider
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

//content loader
import { ContentLoader } from 'vue-content-loader'

export default {
    components: {
        ContentLoader,
        VueperSlides,
        VueperSlide
    },
    setup() {
        const store = useSliderStore()

        onMounted(() => {
            store.getSlidersData()
        })

        const sliders = computed(() => {
            return store.sliderGetter
        })

        return {
            sliders
        }
    }
}
</script>

<style scoped>
.vueperslide__image {
    transform: scale(1.5) rotate(-10deg);
}

.vueperslide__title {
    font-size: 7em;
    opacity: 0.7;
}
</style>