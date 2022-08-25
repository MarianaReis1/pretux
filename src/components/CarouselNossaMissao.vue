<template>

    <div class="relative">
        <carousel :settings="settings" data-carousel="cta">
            <slide v-for="slide in data" :key="slide" >
                <a :href="slide.link.url" :target="slide.link.target" class="aspect-square bg-black-700/20 grid place-items-center p-2 rounded-2xl w-full max-w-[193px] mx-2">
                    <img :src="slide.img.url" :alt="slide.img.alt" class="w-full h-full object-contain" />
                </a>
            </slide>
            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>

</template>

<script setup>

    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

    const props = defineProps({ data: { type: Object } })

    const settings = {
        itemsToShow: 3,
        wrapAround: true,
        snapAlign: "start",
    }

</script>

<style lang="scss">

    [data-carousel="cta"] {

        &.carousel {
            @apply max-w-[550px] static;
        }

        .carousel__track {
            @apply justify-between;
        }

        .carousel__prev {
            @apply hidden;
        }

        .carousel__next {
            @apply bg-transparent w-14 h-14;

            & svg {
                @apply w-14 h-14;
            }

            @screen 5xl {
                @apply -right-3;
            }

            @screen md {
                @apply hidden;
            }
        }

        .carousel__pagination-button {
            @apply bg-black/50 w-2.5 h-2.5 rounded-full;
        }

        .carousel__pagination-button--active {
            @apply bg-white;
        }
    }

</style>