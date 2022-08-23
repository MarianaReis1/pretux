<template>

    <ContentBlock class="bg-black-600 bg-no-repeat bg-cover py-28 px-26 3xl:p-14 md:p-6" :style="bgImg">
        <section class="flex justify-between gap-10 lg:flex-col lg:gap-5" 
            style="">
            <img :src="data.primary.image.url" alt="" class="max-w-[420px] w-full object-cover object-right-top rounded-2xl mx-auto lg:aspect-video lg:object-top" />

            <div class="self-center">
                <div class="mb-20 lg:mb-0">
                    <h1 class="alpha mb-4">
                        {{ data.primary.title }}
                    </h1>
                    <div class="mb-10" v-html="prismicH.asHTML(data.primary.description)"></div>

                    <a :class="['btn lg:w-full', data.primary.button_style]" :href="data.primary.button_link.url">
                        {{ data.primary.button_label }}
                    </a>
                </div>

                <div class="lg:hidden">
                    <h1 class="alpha mb-13">
                        {{ data.primary.carousel_title }}
                    </h1>

                    <div class="relative">
                        <carousel :settings="settings" data-carousel="cta">
                            <slide v-for="slide in data.items" :key="slide" >
                                <a :href="slide.carousel_link" class="aspect-square bg-black-700/20 grid place-items-center p-2 rounded-2xl w-full max-w-[193px] mx-2">
                                    <img :src="slide.carousel_image.url" alt="" class="w-full h-full object-contain" />
                                </a>
                            </slide>
                            <template #addons>
                                <navigation />
                            </template>
                        </carousel>
                    </div>
                </div>
            </div>
        </section>
    </ContentBlock>

</template>

<script setup>
    import * as prismicH from '@prismicio/helpers';
    import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
    import ContentBlock from '@/components/ContentBlock.vue';
    import { computed } from 'vue';

    const props = defineProps({ data: { type: Object } })

    const settings = {
        itemsToShow: 3,
        wrapAround: true,
        snapAlign: "start",
    }

    const bgImg = computed(() => `background-image: url('${props.data.primary.background_image.url}')`)

</script>

<style lang="scss">

[data-carousel="cta"] {
    @apply max-w-[550px] static;

    .carousel__track {
        @apply justify-between;
    }

    .carousel__prev {
        @apply hidden;
    }

    .carousel__next {
        @apply bg-transparent w-14 h-14 right-2.5;

        & svg {
            @apply w-14 h-14;
        }

        @screen md {
            @apply hidden;
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