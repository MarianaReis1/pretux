<template>
    <ContentBlock class="bg-black-700/20 py-14 md:py-8 md:bg-white md:px-6">

        <h1 class="alpha mb-4 md:text-center md:mb-8">
            {{ data.primary.title}}
        </h1>
        <p class="mb-10 md:hidden" v-html="data.primary.description"></p>

        <div class="relative">
            <Carousel data-carousel="parceiros" :settings="settings" :breakpoints="breakpoints">

                <Slide v-for="slide in data.items" :key="slide.img.url">
                    <div class="bg-black-700/20 grid place-items-center p-2 rounded-2xl w-full max-w-[193px] mx-2">
                        <img :src="slide.img.url" alt="" class="w-full h-full object-contain" />
                    </div>
                </Slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </Carousel>
        </div>

    </ContentBlock>
</template>

<script setup>

    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
    import ContentBlock from '@/components/ContentBlock.vue';

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

    @apply max-w-[1000px] mx-auto px-3 static;

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

    .carousel__prev {
        @apply left-2.5;
    }

    .carousel__next {
        @apply right-2.5;
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