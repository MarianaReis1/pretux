<template>
  <carousel :items-to-show="itemsToShow">
    <slot></slot>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const props = defineProps({
  images: { type: Array },
  itemsToShow: { type: Number, default: 1 }
})

</script>
