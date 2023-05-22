<script setup>

    import { ref } from 'vue';

    const props = defineProps({ 
        items: { type: Array, },
        currentPage: { type: String }
    })

    const shouldShowMobileNav = ref(false);

    const toggleMobileNav = () => shouldShowMobileNav.value =! shouldShowMobileNav.value;

    const linkResolver = (link) => link.type == "home" ? '/' : '/' + link.slug;

</script>

<template>

    <ul class="flex items-center justify-center gap-12 font-semibold md:hidden md:absolute md:z-40 md:flex-col md:items-start md:justify-start md:gap-5 md:p-6 md:top-full md:left-0 md:bg-black-600 md:w-screen md:h-screen md:overflow-y-auto">

        <li v-for="item in items" :key="item.label">
            <a  :href="linkResolver(item.link)" 
                :class="[
                    'relative leading-10 text-base tracking-wider before:absolute before:-bottom-[5px] before:-left-[15%] before:h-[3px] before:bg-gradient-to-r before:from-blue before:to-green before:rounded-full before:w-[130%]',
                    linkResolver(item.link) == currentPage ? 'before:block' : 'before:hidden',
                ]"
            >
                {{ item.label }}
            </a>
        </li>
        <li class="ml-20">
            <a href="#contatos">Contatos</a>
        </li>

    </ul>

    <ul v-if="shouldShowMobileNav" :class="['items-center justify-center gap-12 font-semibold hidden md:flex md:absolute md:z-40 md:flex-col md:items-start md:justify-start md:gap-5 md:p-6 md:top-full md:left-0 md:bg-black-600 md:w-screen md:h-screen md:overflow-y-auto']">

        <li v-for="item in items" :key="item.label">
            <a  :href="linkResolver(item.link)" 
                :class="[
                    'relative leading-10 text-base tracking-wider before:absolute before:-bottom-[5px] before:left-0 before:h-[3px] before:bg-gradient-to-r before:from-blue before:to-green before:rounded-full before:w-[136px]',
                    linkResolver(item.link) == currentPage ? 'before:block' : 'before:hidden',
                ]"
            >
                {{ item.label }}
            </a>
        </li>
        <li>
            <a @click="shouldShowMobileNav = false" href="#contatos">Contatos</a>
        </li>

    </ul>

    <button @click="toggleMobileNav" class="border border-white font-display hidden rounded py-1.5 px-4 md:block">
        menu
    </button>

</template>