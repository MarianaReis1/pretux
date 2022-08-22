<script setup>

    import logo from '@img/logo-pretux.svg';

    const props = defineProps({ data: { type: Object }})

    const linkResolver = (link) => link.type == "home" ? '/' : '/' + link.slug;

</script>

<template>

    <section class="max-w-[250px] md:mx-auto md:text-center">

        <div class="font-light mb-10">
            <h1 class="font-bold mb-2">{{ data.site_map_title }}</h1>
            <ul class="mb-6">
                <li v-for="item in data.site_map_items" :key="item.label">
                    <a :href="linkResolver(item.link)" class="">{{ item.label }}</a>
                </li>
            </ul>

            <h1 class="font-bold mb-2">{{ data.contact_title }}</h1>
            <div class="mb-6">
                <a :href="data.contact_email" class="">{{ data.contact_label }}</a>
            </div>

            <h1 class="font-bold mb-2">{{ data.social_media_title }}</h1>
            <ul class="flex flex-wrap justify-between gap-5">
                <li v-for="item in data.social_media_items" :key="item.link">
                    <a :href="item.link.url" class="">
                        <img :src="item.icon.url" alt="">
                    </a>
                </li>
            </ul>
        </div>

        <img :src="data.logo.url" alt="" class="w-[245px] mx-auto"/>

    </section>

</template>