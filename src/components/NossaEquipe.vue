<template>
    <ContentBlock class="bg-black-600 bg-no-repeat bg-center-top bg-cover py-28 px-26 3xl:p-14 md:px-0 md:py-6" :style="bgImg">
        <h1 class="alpha mb-14">
            {{ data.primary.title }}
        </h1>

        <div class="flex flex-wrap items-center justify-around gap-8 mx-auto mb-12">

            <div 
                v-for="item in dataToShow" :key="item.name" 
                class="max-w-[280px] w-full relative"
            >
                <div class="flex flex-col min-h-[350px] relative rounded-lg z-10">
                    <div v-if="item.position_at_pretux" class="bg-white border border-black-600 font-semibold leading-none mb-auto p-2 m-4 rounded text-black-800 w-fit drop-shadow-3xl text-xxs">
                        {{ item.position_at_pretux }}
                    </div>
                    <div class="mt-auto bg-gradient--secondary p-4 rounded-b-lg">
                        <p v-if="item.name" class="font-semibold">{{ item.name }}</p>
                        <p v-if="item.job_position" class="text-xxs">{{ item.job_position }}</p>
                        <div class="border-t-[3px] my-2 w-1/4"></div>
                        <div class="flex items-center justify-between text-xxs">
                            <p v-if="item.location">{{ item.location }}</p>
                            <a v-if="item.linkedin.url" class="ml-auto" :href="item.linkedin.url" target="_blank"><img :src="iconLinkedin" alt="icon linkedin"/></a>
                        </div>
                    </div>
                </div>
                <img v-if="item.img.url" :src="item.img.url" :alt="item.img.alt" class="absolute top-0 left-0 object-cover rounded-lg h-full w-full" />
            </div>

        </div>

        <div v-if="hasMoreItems" @click="showMoreItems" class="flex items-center justify-center">
            <button class="btn tertiary mx-auto">Mostar Mais</button>
        </div>
    </ContentBlock>
</template>

<script setup>
import { computed, ref } from 'vue';
import ContentBlock from '@/components/ContentBlock.vue';
import bgImage from '@img/cta-bg.jpg';
import iconLinkedin from '@img/icon-linkedin-blue.png';

const props = defineProps({ 
    data: { type: Object, required: true },
    showBg: { type: Boolean, default: false },
})

const amountToShow = ref(12);
const totalItems = ref(props.data.items.length);

const dataToShow = computed(() => props.data.items.slice(0, amountToShow.value));
const hasMoreItems = computed(()=> totalItems.value > amountToShow.value);

const showMoreItems = () => {
    return amountToShow.value += amountToShow.value
}

const bgImg = computed(() => props.showBg && `background-image: url('${bgImage}')`)

</script>