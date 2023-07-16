<template>
    <div class="social">
        <ul v-if="isMobile == false" class="social-links">
            <li class="fadeRight" style="animation-delay: 0.5s">
                <a href="https://www.linkedin.com/in/yunusdogru" target="_blank" class="social-link">Linkedin</a>
            </li>
            <li class="fadeRight" style="animation-delay: 0.5s">
                /
            </li>
            <li class="fadeRight" style="animation-delay: 0.6s">
                <a href="https://www.github.com/YunusDogru" target="_blank" class="social-link">Github</a>
            </li>
            <li class="fadeRight" style="animation-delay: 0.6s">
                /
            </li>
            <li class="fadeRight" style="animation-delay: 0.7s">
                <a href="https://www.instagram.com/_yunusdogru" target="_blank" class="social-link">Instagram</a>
            </li>
        </ul>
        <ul v-else-if="isMobile == true" class="social-links">
            <li class="fadeRight" style="animation-delay: 0.5s">
                <a href="https://www.linkedin.com/in/yunusdogru" target="_blank" class="social-link">
                    <Icon class="social-icon" name="mdi:linkedin"/>
                </a>
            </li>
            <li class="fadeRight" style="animation-delay: 0.6s">
                <a href="https://www.github.com/YunusDogru" target="_blank" class="social-link">
                    <Icon class="social-icon" name="mdi:github"/>
                </a>
            </li>
            <li class="fadeRight" style="animation-delay: 0.7s">
                <a href="https://www.instagram.com/_yunusdogru" target="_blank" class="social-link">
                    <Icon class="social-icon" name="mdi:instagram"/>
                </a>
            </li>
        </ul>
    </div>  
</template>
<script setup>

const isMobile = ref(null);

onMounted(()=>{
    const handleWidth = () => {
        if(window.innerWidth > 800) {
            isMobile.value = false;
    }
        else if (window.innerWidth < 800) {
            isMobile.value = true;
        }
    }
    handleWidth();
    window.addEventListener('resize', handleWidth);
})

</script>
<style>
.social ul {
    display: flex;
    align-items: center;
}
.social ul li a,
.social ul li {
    color: rgb(141, 141, 141);
    font-size: 13px;
    margin-left: 10px;
    margin-right: 2px;
    transition: color 0.3s ease;
}
.social ul li a:hover {
    color: rgb(218, 218, 218);
}
.social-icon {
    font-size: 18px;
}
@media (max-width: 600px) {
    .social ul li a {
        margin-left: 5px !important;
        margin-right: 0 !important;
    }
}

</style>