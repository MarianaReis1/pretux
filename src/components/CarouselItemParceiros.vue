<template>
    <Slide class="">
        <div class="bg-black-700/20 grid place-items-center mx-5 p-2 rounded-2xl w-full md:max-w-[200px] md:mx-3">
            <img :src="image" alt="" class="w-full h-full object-contain" />
        </div>
    </Slide>
</template>

<script setup>

import { Slide } from 'vue3-carousel';

const props = defineProps({ image: { type: String, required: true } })

</script>
<style lang="scss">

[data-carousel="parceiros"] {

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