<template>
    <div class="absolute">
        <svg ref="icon" class="font-heading" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text transform="translate(41.5947 14.8341) rotate(171.47)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">P</tspan></text>
            <text transform="translate(32.0596 16.7751) rotate(153.624)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">R</tspan></text>
            <text transform="translate(25.9297 19.9674) rotate(136.555)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">E</tspan></text>
            <text transform="translate(19.7881 26.3765) rotate(119.486)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">T</tspan></text>
            <text transform="translate(16.5059 32.4589) rotate(102.416)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">U</tspan></text>
            <text transform="translate(14.9121 40.9347) rotate(83.7951)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">X</tspan></text>
            <text transform="translate(16.3818 49.8214) rotate(67.5016)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">.</tspan></text>
            <text transform="translate(18.6416 55.306) rotate(50.4322)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">P</tspan></text>
            <text transform="translate(25.2217 62.4752) rotate(32.587)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">R</tspan></text>
            <text transform="translate(31.1172 66.0818) rotate(15.5176)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">E</tspan></text>
            <text transform="translate(39.7754 68.0393) rotate(-1.55176)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">T</tspan></text>
            <text transform="translate(46.6787 67.7157) rotate(-18.6211)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">U</tspan></text>
            <text transform="translate(54.7637 64.7113) rotate(-37.2423)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">X</tspan></text>
            <text transform="translate(61.6201 58.8705) rotate(-53.5357)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">.</tspan></text>
            <text transform="translate(65.1543 54.1057) rotate(-70.6051)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">P</tspan></text>
            <text transform="translate(67.9043 44.7719) rotate(-88.4504)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">R</tspan></text>
            <text transform="translate(67.9551 37.8606) rotate(-105.52)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">E</tspan></text>
            <text transform="translate(65.168 29.4329) rotate(-122.589)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">T</tspan></text>
            <text transform="translate(61.3311 23.6843) rotate(-139.658)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">U</tspan></text>
            <text transform="translate(54.5889 18.3064) rotate(-158.28)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">X</tspan></text>
            <text transform="translate(46.0488 15.4427) rotate(-174.573)" fill="black" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="10" letter-spacing="0em"><tspan x="0" y="11.8636">.</tspan></text>
        </svg>
    </div>
</template>

<script setup>

    import { onMounted, ref } from 'vue';
    import gsap from 'gsap';

    const icon = ref()

    onMounted(() => {

        gsap.to(icon.value, {
            rotation: 360, 
            ease: "none",
            repeat: -1,
            duration: 15
        });

    })


</script>