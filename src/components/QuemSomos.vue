<template>
    <section class="mb-22 max-w-[1280px] mx-auto px-6">
        <h1 class="alpha mb-14 text-center">
            {{ data.primary.title }}
        </h1>

        <div v-for="(item,index) in data.items" :key="item" class="bg-black-800 flex justify-start items-start gap-11 mb-12 p-6 rounded-xl w-full md:gap-4 odd:flex-row-reverse">

            <img :src="item.img.url" :alt="item.img.alt" 
                :class="[index % 2 === 0 ? 'md:object-[75%]' : 'md:object-[25%]' ,'max-w-[258px] rounded-xl w-full md:h-[374px] md:object-cover md:w-2/5']"
            />

            <div class="max-w-[700px] py-8 w-full md:py-0 md:w-3/5">
                <h1 class="alpha mb-4">
                    {{ item.title }}
                </h1>
                <div class="xs:text-xxs" v-html="prismicH.asHTML(item.description)"></div>
            </div>

        </div>

    </section>
</template>

<script setup>

import * as prismicH from '@prismicio/helpers';

const props = defineProps({ data: { type: Object } })

</script>