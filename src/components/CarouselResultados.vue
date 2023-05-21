<template>

    <Carousel data-carousel="resultados" :settings="settings" :breakpoints="breakpoints">
        <Slide :key="0">
            <div class="editorial" v-html="prismicH.asHTML(data.content_one)"></div>
        </Slide>
        <Slide :key="1">
            <div class="editorial" v-html="prismicH.asHTML(data.content_two)"></div>
        </Slide>
        <Slide :key="2">
            <div class="editorial" v-html="prismicH.asHTML(data.content_three)"></div>
        </Slide>
        <Slide :key="3">
            <div class="editorial" v-html="prismicH.asHTML(data.content_four)"></div>
        </Slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </Carousel>

</template>

<script setup>

    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
    import * as prismicH from '@prismicio/helpers';

    const props = defineProps({ data: { type: Object } })

    const settings = {
        itemsToShow: 1,
        snapAlign: "start",
    }

    const breakpoints = {
        767: {
            itemsToShow: 2,
        },
        1150: {
            itemsToShow: 4,
        }
    }

</script>

<style lang="scss">

    [data-carousel="resultados"] {
        .carousel__track {
            @apply justify-between;
        }

        .carousel__prev,
        .carousel__next {
            @apply hidden;
        }

        .carousel__pagination {
            @apply hidden;

            @screen 3xl {
                @apply flex;
            }
        }

        .carousel__pagination-button {
            @apply bg-black/50 w-2.5 h-2.5 rounded-full;
        }

        .carousel__pagination-button--active {
            @apply bg-black;
        }
    }



    .editorial {
        @apply mx-3 text-black text-center;

        & em {
            @apply text-9xl not-italic block text-brown-700;
        }
    }

</style>