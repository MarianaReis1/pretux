<template>
    <section class="bg-black-800 py-12 ">
        <div class="max-w-[1244px] mx-auto px-3 mb-10">
            <h1 class="alpha mb-4">
                Outros parceiros
            </h1>
            <p>Essas são escolas e eventos que apoiam a PretUX </p>
        </div>

        <CarouselBase :items-to-show="4" :wrap-around="true" >
            <CTACarouselItem image="/src/assets/img/logo-pretux.png"></CTACarouselItem>
            <CTACarouselItem image="/src/assets/img/equipe-jeff.png"></CTACarouselItem>
            <CTACarouselItem image="/src/assets/img/logo-pretux.png"></CTACarouselItem>
            <CTACarouselItem image="/src/assets/img/equipe-maria.png"></CTACarouselItem>
            <CTACarouselItem image="/src/assets/img/logo-pretux.png"></CTACarouselItem>
        </CarouselBase>
    </section>
</template>

<script setup>

import CarouselBase from '@/components/CarouselBase.vue';
import CTACarouselItem from '@/components/CTACarouselItem.vue';


</script>