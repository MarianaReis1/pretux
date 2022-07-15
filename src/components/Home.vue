<script setup>
import logo from '@img/logo-pretux.svg';

</script>

<template>

<header class="bg-black-600 py-4 font-heading">
    <nav class="flex justify-between items-center max-w-[1256px] mx-auto px-3">
        <img :src="logo" alt="" class=""/>
        <ul class="nav flex items-center justify-center gap-12 font-semibold text-white text-2xl">
            <li><a href="/" class=""> Login </a></li>
            <li><a href="/" class="active"> Home </a></li>
            <li><a href="/" class=""> Sobre </a></li>
            <li><a href="/" class=""> Quero Ajudar </a></li>
            <li><a href="/" class=""> Serviços </a></li>
            <li><a href="/" class=""> Contatos </a></li>
        </ul>
    </nav>
</header>

<!-- hero -->
<section class="bg-[url('src/assets/img/two-guys.png')] bg-center bg-cover bg-no-repeat px-10 py-48 text-white">
    <div class="max-w-[433px]">
        <h1 class="font-bold text-display text-9xl mb-2.5">Pretux</h1>
        <p class="leading-tight mb-5 text-3xl">
            Somos uma comunidade que oferece apoio, direcionamento, mentoria e qualificação para os profissionais pretos de UX.
        </p>

        <a href="/" class="btn--primary">
            Seja membro
        </a>
    </div>
</section>

<!-- main -->
<main class="max-w-[1256px] mx-auto px-3 pt-14">
    <h1 class="alpha mb-11 text-center">
        O que fazemos:
    </h1>

    <!-- info-box -->
    <section class="flex gap-10 justify-between mb-22">
        <div class="max-w-[257px] mx-auto">
            <div class="bg-blend flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                <p class="font-bold text-white">Bolsa de estudos</p>
            </div>
            <p class="text-black-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis convallis luctus.
            </p>
        </div>
        <div class="max-w-[257px] mx-auto">
            <div class="bg-blend flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                <p class="font-bold text-white">Bolsa de estudos</p>
            </div>
            <p class="text-black-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis convallis luctus.
            </p>
        </div>
        <div class="max-w-[257px] mx-auto">
            <div class="bg-blend flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                <p class="font-bold text-white">Bolsa de estudos</p>
            </div>
            <p class="text-black-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis convallis luctus.
            </p>
        </div>
        <div class="max-w-[257px] mx-auto">
            <div class="bg-blend flex items-center justify-center mb-8 rounded-lg w-[257px] h-[257px]">
                <p class="font-bold text-white">Bolsa de estudos</p>
            </div>
            <p class="text-black-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis convallis luctus.
            </p>
        </div>
    </section>
</main>

<footer class="bg-black-800 py-14">
    <div class="max-w-[1256px] mx-auto px-3 flex justify-between items-start">
        <img src="@/assets/img/logo-pretux.svg" alt="" class="w-[245px]"/>

        <div class="flex gap-16 mx-auto text-white text-3xl">
            <ul class="">
                <h1 class="font-bold mb-8">No Site</h1>
                <li><a href="" class="">Pagina Inicial</a></li>
                <li><a href="" class="">Sobre</a></li>
                <li><a href="" class="">Quero Ajudar</a></li>
                <li><a href="" class="">Serviços</a></li>
            </ul>
            <ul class="">
                <h1 class="font-bold mb-8">No Rede</h1>
                <li><a href="" class="">Linkedin</a></li>
                <li><a href="" class="">Instagram</a></li>
                <li><a href="" class="">Facebook</a></li>
                <li><a href="" class="">Medium</a></li>
            </ul>
            <ul class="">
                <h1 class="font-bold mb-8">Contato</h1>
                <li><a href="mailto:somos@pretux.com.br" class="">somos@pretux.com.br</a></li>
            </ul>
        </div>
    </div>
</footer>
</template>

<style lang="scss">

.active {
    @apply relative leading-10 before:absolute before:-bottom-[6px] before:h-[3px] before:bg-brown-400 before:rounded-full before:w-full;
}

.bg-blend {
    background: url('/src/assets/img/girl-1.png'),linear-gradient(to right bottom, black, transparent);
    background-blend-mode: multiply;
}

</style>
