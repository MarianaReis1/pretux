<template>
	<ContentBlock class="bg-black-600 py-14 md:py-6">
		<div class="mb-22 md:mb-10">
			<h1 class="alpha mb-4">{{data.primary.title}}</h1>
			<div v-html="prismicH.asHTML(data.primary.description)"></div>
		</div>

		<div class="flex items-start justify-around flex-wrap w-full gap-y-12 gap-x-5">

			<div v-for="item in data.items" :key="item.title" class="h-full max-w-[189px] mx-auto w-full xs:max-w-[130px]">

				<div class="aspect-square bg-white flex items-center justify-center mb-4 rounded-2xl p-2 xs:p-5">
					<img :src="item.img.url" :alt="item.img.alt"/>
				</div>

				<h1 class="font-bold mb-12 text-center text-base md:mb-4">
					{{ item.title }}
				</h1>

				<a :href="item.link.url" class=" self-end block border-[3px] border-white mx-auto rounded-full py-2 px-4 w-fit">
					Conhecer
				</a>

			</div>

		</div>
	</ContentBlock>
</template>

<script setup>

	import * as prismicH from '@prismicio/helpers';
	import ContentBlock from '@/components/ContentBlock.vue';

	const props = defineProps({ data: { type: Object } });

</script>