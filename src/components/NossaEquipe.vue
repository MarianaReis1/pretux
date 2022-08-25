<template>
    <section class="max-w-[1280px] mx-auto px-6 pb-26">
        <h1 class="alpha mb-11 text-center">
            {{ data.primary.title }}
        </h1>
        <div class="flex flex-wrap gap-12 justify-center mx-auto mb-12">

            <div v-for="item in dataToShow" :key="item.name" 
                class="flex flex-col relative h-[441px] max-w-[354px] p-6 w-full rounded-lg"
            >
                <div class="bg-white border border-black-600 font-semibold leading-none mb-auto p-2 rounded text-black-800 w-fit drop-shadow-3xl">
                    {{ item.job_category }}
                </div>
                <div class="">
                    <p class="text-2xl">{{ item.name }}</p>
                    <p class="text-md">{{ item.job_position }}</p>
                    <div class="border-t-[3px] my-4 w-1/4"></div>
                    <p>{{ item.address }}</p>
                </div>
                <img :src="item.img.url" :alt="item.img.alt" class="absolute top-0 left-0 object-cover rounded-lg h-full w-full -z-20" />
                <div class="absolute top-0 left-0 bg-gradient-to-b from-black-600/0 via-black-600/0 to-black-600/90 object-cover rounded-lg h-full w-full -z-20"></div>
            </div>

        </div>

        <div v-if="hasMoreItems" @click="showMoreItems" class="flex items-center justify-center">
            <button class="btn tertiary mx-auto">Mostar Mais</button>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({ data: { type: Object } })

const amountToShow = ref(12);
const totalItems = ref(props.data.items.length);

const dataToShow = computed(() => props.data.items.slice(0, amountToShow.value));
const hasMoreItems = computed(()=> totalItems.value > amountToShow.value);

const showMoreItems = () => {
    amountToShow.value += amountToShow.value
}

</script>