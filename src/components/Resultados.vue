<template>
    <h1 class="alpha text-black-600 mb-11 text-center">
        {{ data.primary.title }}
    </h1>
    <div class="">

        <div class="flex items-start justify-center gap-9 md:gap-5 w-full mb-13">
            <div class="flex items-start justify-center gap-9 md:gap-5 5xl:flex-col">
                <img :src="data.items[0].img.url" alt="" class="shrink rounded-lg max-w-[217px] w-full">
                <img :src="data.items[1].img.url" alt="" class="shrink rounded-lg max-w-[217px] w-full mt-16 5xl:mt-0">
            </div>
            <div class=" rounded-lg flex items-start justify-center gap-9 md:gap-5 5xl:flex-col 5xl:mt-20">
                <img :src="data.items[2].img.url" alt="" class="shrink rounded-lg max-w-[217px] w-full mt-32 5xl:mt-0">
                <img :src="data.items[3].img.url" alt="" class="shrink rounded-lg max-w-[217px] w-full mt-16 5xl:mt-0">
            </div>
            <img :src="data.items[4].img.url" alt="" class="shrink rounded-lg max-w-[217px] w-full 5xl:hidden">
        </div>

        <CarouselBase data-carousel="resultados" :pagination="true" :settings="settings" :breakpoints="breakpoints">
            <Slide :key="0">
                <div class="editorial" v-html="prismicH.asHTML(data.primary.content_one)"></div>
            </Slide>
            <Slide :key="1">
                <div class="editorial" v-html="prismicH.asHTML(data.primary.content_two)"></div>
            </Slide>
            <Slide :key="2">
                <div class="editorial" v-html="prismicH.asHTML(data.primary.content_three)"></div>
            </Slide>
            <Slide :key="3">
                <div class="editorial" v-html="prismicH.asHTML(data.primary.content_four)"></div>
            </Slide>
        </CarouselBase>
    </div>
</template>

<script setup>
import * as prismicH from '@prismicio/helpers';
import 'vue3-carousel/dist/carousel.css';
import { Slide } from 'vue3-carousel';
import CarouselBase from '@/components/CarouselBase.vue';

const props = defineProps({ data: { type: Object }})

const settings = {
    itemsToShow: 1,
    wrapAround: true,
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
        @apply text-7xl not-italic block;
    }
    & p {
        @apply text-4xl;
    }
}

</style>