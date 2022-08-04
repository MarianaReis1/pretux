<script setup>
import logo from '@img/logo-pretux.svg';

</script>

<template>

<footer class="bg-black-800 py-14">
    <div class="max-w-[1256px] mx-auto px-3 flex justify-between items-start">
        <img :src="logo" alt="" class="w-[245px]"/>

        <div class="flex gap-16 mx-auto text-3xl">
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
            <ul class="" id="contato">
                <h1 class="font-bold mb-8">Contato</h1>
                <li><a href="mailto:somos@pretux.com.br" class="">somos@pretux.com.br</a></li>
            </ul>
        </div>
    </div>
</footer>

</template>