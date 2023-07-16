<template>
    <a class="animFadeBottom" :href="link" target="_blank">{{title}} <Icon style="font-size: 20px" :name="icon"/></a>
</template>

<script setup> 
const props = defineProps({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>
<style scoped>
a {
    text-decoration: none;
    padding: 18px 30px;
    font-size: 16px;
    border: 1px solid rgb(36, 36, 36);
    color: rgb(154, 154, 154);
    background-color: rgb(26, 26, 26);
    border-radius: 3px;
    transition: transform 0.2s ease-out;
}
a:hover {
    transform: scale(0.9) !important;
}
</style>