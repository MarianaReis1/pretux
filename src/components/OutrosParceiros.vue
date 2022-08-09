<template>

    <div class="max-w-[1244px] mx-auto px-3 md:bg-black-600 md:rounded-2xl md:py-4 md:px-10">
        <h1 class="alpha mb-4 md:text-center md:mb-8">
            {{ data.primary.title}}
        </h1>
        <p class="mb-10 md:hidden" v-html="data.primary.description"></p>

        <CarouselBase data-carousel="parceiros" :pagination="true" :settings="settings" :breakpoints="breakpoints">
            <CarouselItemParceiros :image="data.items[0].img.url"></CarouselItemParceiros>
            <CarouselItemParceiros :image="data.items[1].img.url"></CarouselItemParceiros>
            <CarouselItemParceiros :image="data.items[2].img.url"></CarouselItemParceiros>
            <CarouselItemParceiros :image="data.items[3].img.url"></CarouselItemParceiros>
            <CarouselItemParceiros :image="data.items[3].img.url"></CarouselItemParceiros>
            <CarouselItemParceiros :image="data.items[3].img.url"></CarouselItemParceiros>
        </CarouselBase>
    </div>

</template>

<script setup>

import CarouselBase from '@/components/CarouselBase.vue';
import CarouselItemParceiros from '@/components/CarouselItemParceiros.vue';

const props = defineProps({ data: { type: Object } })

const settings = {
    itemsToShow: 2,
    wrapAround: true,
    snapAlign: "start",
}

const breakpoints = {
    767: {
        itemsToShow: 4,
    }
}

</script>