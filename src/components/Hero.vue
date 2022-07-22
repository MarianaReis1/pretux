<script setup>
const props = defineProps({
    data: { type: Object }
})
</script>

<template>

<section v-if="data" class="bg-[url('src/assets/img/hero.png')] bg-center bg-cover bg-no-repeat max-w-[1440px] mx-auto px-10 py-48 text-white">
    <div class="max-w-[433px]">
        <h1 class="font-bold text-display text-9xl mb-2.5">{{ data.title }}</h1>
        <p class="leading-tight mb-5 text-3xl">
            {{ data.subtitle }}
        </p>

        <a v-if="data.button" :href="data.button.url" class="btn--primary">
            {{ data.button.label }}
        </a>
    </div>
</section>

</template>