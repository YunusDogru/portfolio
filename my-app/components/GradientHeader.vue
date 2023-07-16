<template>
    <h1  class="animFadeBottom" ref="header">{{title}}</h1>
</template>
<script setup>
const header = ref();

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
const handleScroll = (e) => {
    var scrollTop = window.pageYOffset || e.target.scrollTop;
    header.value.style.backgroundImage = 'linear-gradient(' + (scrollTop / 2 + 97.13) + 'deg, rgb(233, 233, 233) 0%, rgb(81, 81, 81) 100%)';

}
onMounted(()=> {
    window.addEventListener('scroll', handleScroll);
})
</script>
<style scoped>
h1 {
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(97.13deg, rgb(233, 233, 233) 0%, rgb(81, 81, 81) 100%);
    width: 50%;
    text-align: center;
    line-height: 4rem;
}

</style>