<template>
    <Slide class="" :key="index">
        <div class="bg-black-700/20 grid place-items-center p-2 rounded-2xl w-full max-w-[193px] mx-2">
            <img :src="image" alt="" class="w-full h-full object-contain" />
        </div>
    </Slide>
</template>

<script setup>

import { Slide } from 'vue3-carousel';

const props = defineProps({ image: { type: String, required: true }, index: Number })

</script>