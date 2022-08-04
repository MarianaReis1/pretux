<template>
    <section class="bg-no-repeat bg-center bg-cover flex items-center justify-between gap-10 py-28 px-26" 
    :style="'background-image: url(' + data.bkgImg + ')'">
    <img :src="data.sideImg" alt="" class="flex-shrink-0 max-w-[420px] w-full" />

        <div class="flex-grow">
            <div class="mb-20">
                <h1 class="alpha mb-4">
                    {{ data.title }}
                </h1>
                <p class="mb-10" v-html="data.description"></p>

                <a v-if="data.button" :href="data.button.url" class="btn--primary">
                    {{ data.button.label }}
                </a>
            </div>

            <div>
                <h1 class="alpha mb-13">
                    {{ data.carousel.title }}
                </h1>



                <CarouselBase class="max-w-850px" :items-to-show="3" :wrap-around="true" >
                    <CTACarouselItem  image="/src/assets/img/logo-pretux.png"></CTACarouselItem>
                    <CTACarouselItem  image="/src/assets/img/equipe-jeff.png"></CTACarouselItem>
                    <CTACarouselItem  image="/src/assets/img/logo-pretux.png"></CTACarouselItem>
                    <CTACarouselItem  image="/src/assets/img/equipe-maria.png"></CTACarouselItem>
                    <CTACarouselItem  image="/src/assets/img/logo-pretux.png"></CTACarouselItem>
                </CarouselBase>
            </div>
        </div>
    </section>
</template>

<script setup>

import CarouselBase from '@/components/CarouselBase.vue';
import CTACarouselItem from '@/components/CTACarouselItem.vue';

const props = defineProps({ data: { type: Object } })

</script>
