<script setup>
//images
import logo from '@img/logo-pretux.svg';


</script>

<template>

    <nav class="bg-black-600 py-4 font-heading">
        <section class="flex justify-between items-center max-w-[1256px] mx-auto px-3">
            <img :src="logo" alt="" class=""/>
            <ul class="nav flex items-center justify-center gap-12 font-semibold text-white text-2xl">
                <li><a href="/" class="relative leading-10 before:absolute before:hidden before:-bottom-[6px] before:h-[3px] before:bg-brown-400 before:rounded-full before:w-full"> Login </a></li>
                <li><a href="/" class="relative leading-10 before:absolute before:hidden before:-bottom-[6px] before:h-[3px] before:bg-brown-400 before:rounded-full before:w-full"> Home </a></li>
                <li><a href="/sobre" class="relative leading-10 before:absolute before:hidden before:-bottom-[6px] before:h-[3px] before:bg-brown-400 before:rounded-full before:w-full"> Sobre </a></li>
                <li><a href="/quero-ajudar" class="relative leading-10 before:absolute before:hidden before:-bottom-[6px] before:h-[3px] before:bg-brown-400 before:rounded-full before:w-full"> Quero Ajudar </a></li>
                <li><a href="/servicos" class="relative leading-10 before:absolute before:hidden before:-bottom-[6px] before:h-[3px] before:bg-brown-400 before:rounded-full before:w-full"> Serviços </a></li>
                <li><a href="#contato" class="relative leading-10 before:absolute before:hidden before:-bottom-[6px] before:h-[3px] before:bg-brown-400 before:rounded-full before:w-full"> Contatos </a></li>
            </ul>
        </section>
    </nav>

</template>

<style lang="scss">

.active {
    @apply before:block ;
}

</style>
