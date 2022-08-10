<template>

	<div class="mb-22">
		<h1 class="alpha mb-4">{{data.primary.title}}</h1>
		<div v-html="prismicH.asHTML(data.primary.description)"></div>
	</div>

	<div class="flex items-center justify-around flex-wrap w-full gap-y-12">

		<div v-for="item in data.items" :key="item.title" class="mx-2">
			<div class="max-w-[189px] mx-auto w-full xs:max-w-[130px]">
				<div class="aspect-square bg-white flex items-center justify-center mb-4 rounded-2xl p-2">
					<img :src="item.image.url" alt=""/>
				</div>
				<h1 class="font-bold mb-12 text-center text-base md:mb-4">
					{{ item.title }}
				</h1>
				<a :href="item.link.url" class="block border-[3px] border-white mx-auto rounded-full py-2 px-4 w-fit">
					Conhecer
				</a>
			</div>
		</div>

	</div>

</template>

<script setup>
import * as prismicH from '@prismicio/helpers';
const props = defineProps({ data: { type: Object } })

</script>