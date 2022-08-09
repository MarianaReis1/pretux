<template>
  <carousel>
    <slot></slot>

    <template #addons>
      <navigation />
      <pagination v-if="pagination" />
    </template>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Pagination } from 'vue3-carousel';

const props = defineProps({ pagination: { type: Boolean, default: false } })

</script>