<script setup>
import Hero from '@/components/Hero.vue';
import { ref, onMounted } from 'vue';

const data = ref();

onMounted(async () => {

    data.value = await fetch(
        'https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=Zy0MFblgvdpEgCvnyOVhmAtt'
    ).then((response) => response.json()).then((resp) => resp.story.content)
})

</script>

<template>

<Hero></Hero>

<!-- main -->
<main class="max-w-[1256px] mx-auto px-3 pt-14">
    <h1 class="alpha mb-11 text-center">
        O que fazemos:
    </h1>

    <!-- info-box -->
    <section class="flex gap-10 justify-between mb-22">
        <div class="max-w-[257px] mx-auto">
            <div class="bg-blend flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                <p class="font-bold text-white">Bolsa de estudos</p>
            </div>
            <p class="text-black-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis convallis luctus.
            </p>
        </div>
        <div class="max-w-[257px] mx-auto">
            <div class="bg-blend flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                <p class="font-bold text-white">Bolsa de estudos</p>
            </div>
            <p class="text-black-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis convallis luctus.
            </p>
        </div>
        <div class="max-w-[257px] mx-auto">
            <div class="bg-blend flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                <p class="font-bold text-white">Bolsa de estudos</p>
            </div>
            <p class="text-black-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis convallis luctus.
            </p>
        </div>
        <div class="max-w-[257px] mx-auto">
            <div class="bg-blend flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                <p class="font-bold text-white">Bolsa de estudos</p>
            </div>
            <p class="text-black-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis convallis luctus.
            </p>
        </div>
    </section>
</main>

</template>

<style lang="scss">

.active {
    @apply relative leading-10 before:absolute before:-bottom-[6px] before:h-[3px] before:bg-brown-400 before:rounded-full before:w-full;
}

.bg-blend {
    background: url('/src/assets/img/girl-1.png'),linear-gradient(to right bottom, black, transparent);
    background-blend-mode: multiply;
}

</style>
