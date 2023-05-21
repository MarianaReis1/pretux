<template>

    <div class="relative">
        <Carousel :settings="settings" data-carousel="cta" :breakpoints="breakpoints">
            <Slide v-for="slide in data" :key="slide" >
                <a :href="slide.link.url" :target="slide.link.target" class="bg-white py-4 px-6 rounded-2xl w-full max-w-[250px] h-[94px] mx-2">
                    <img :src="slide.img.url" :alt="slide.img.alt" class="h-full object-contain mx-auto" />
                </a>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </carousel>
    </div>

</template>

<script setup>

    import { Carousel, Slide, Navigation } from 'vue3-carousel';

    const props = defineProps({ data: { type: Object } })

    const settings = {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: "start",
    }
    const breakpoints = {
        1024: {
            itemsToShow: 4,
        },
    }

</script>

<style lang="scss">

    [data-carousel="cta"] {
        .carousel__prev, .carousel__next {
            @apply bg-transparent w-14 h-14;

            & svg {
                @apply w-14 h-14;
            }
        }

        // .carousel__pagination-button {
        //     @apply bg-black/50 w-2.5 h-2.5 rounded-full;
        // }

        // .carousel__pagination-button--active {
        //     @apply bg-white;
        // }
    }

</style>