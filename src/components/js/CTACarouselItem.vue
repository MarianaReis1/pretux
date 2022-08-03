<template>
    <Slide class="">
        <div class="carousel__item">
            <img :src="image" alt="" class="w-full h-full object-contain" />
        </div>
    </Slide>
</template>

<script setup>

import { Slide } from 'vue3-carousel';

const props = defineProps({ image: { type: String, required: true } })

</script>
<style lang="scss">
.carousel__item {
    @apply aspect-[4/3] bg-black-700/20 grid place-items-center p-2 rounded-2xl w-full max-w-[200px];
}

.carousel__prev {
    @apply hidden;
}

.carousel__next {
    @apply bg-transparent;

    & svg {
        display: none;
    }
}

</style>