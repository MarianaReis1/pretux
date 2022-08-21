<template>

    <ContentBlock class="bg-white py-14 md:hidden">
        <h1 class="alpha mb-11 text-center text-black-600">
            {{ data.primary.title }}
        </h1>
        <div class="flex gap-10 justify-between flex-wrap">
            <div v-for="item in data.items" :key="item.title" class="max-w-[257px] mx-auto w-full">
                <div :style="bg(item.image.url)" class="bg-no-repeat bg-cover relative flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                    <div class="absolute w-full h-full bg-gradient-to-br from-black to-transparent rounded-lg"></div>
                    <p class="font-bold relative">{{ item.title }}</p>
                </div>
                <p class="text-black-600 text-lg">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </ContentBlock>

</template>

<script setup>

    import ContentBlock from '@/components/ContentBlock.vue';

    const bg = (image) => `background-image: url('${image}');`;

    const props = defineProps({ data: { Object } });

</script>