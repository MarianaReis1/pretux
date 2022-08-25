<template>

    <div class="relative">
        <Carousel data-carousel="parceiros" :settings="settings" :breakpoints="breakpoints">

            <Slide v-for="slide in data" :key="slide.img.url">
                <div class="bg-black-700/20 grid place-items-center p-2 rounded-2xl w-full max-w-[193px] mx-2">
                    <img :src="slide.img.url" :alt="slide.img.alt" class="w-full h-full object-contain" />
                </div>
            </Slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </Carousel>
    </div>

</template>

<script setup>

    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

    const props = defineProps({ data: { type: Object } });

    const settings = {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: "start",
    };

    const breakpoints = {
        767: {
            itemsToShow: 4,
        }
    };

</script>

<style lang="scss">

    [data-carousel="parceiros"] {

        &.carousel { 
            @apply max-w-[1000px] mx-auto px-3 static;
        }

        .carousel__prev,
        .carousel__next {
            @apply bg-transparent w-14 h-14 md:w-8 md:h-8;

            & svg {
                @apply w-14 h-14 md:w-8 md:h-8;
            }

            @screen md {
                @apply hidden;
            }
        }

        .carousel__pagination {
            @apply hidden;

            @screen md {
                @apply flex;
            }
        }

        .carousel__viewport {
            @apply -mr-3;

            @screen md {
                @apply mb-6
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