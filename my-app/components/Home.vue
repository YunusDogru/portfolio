<template>
    <section class="home">
        <div class="image">
            <img src="~/assets/img/selfie.jpeg" alt="" class="animFadeBottom">
        </div>
        <span class="animFadeBottom">Hi, I'm Yunus <div class="animShake">👋</div></span>
        <gradient-header style="animation-delay: 0.3s; font-size: 3rem" :title="'Creating Captivating Interfaces, Igniting Digital Connections.'"/>
        <link-button style="animation-delay: 0.4s" :link="'https://resume.io/r/ODIotcLf4'" :title="'Resume'" :icon="'ic:baseline-arrow-outward'"/>
    </section>
</template>
<style scoped>
.home {
    height: calc(100vh - 80px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 20px;
    animation-delay: 0.1s;
}
.image img {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    z-index: 3;
}
.home > * {
    margin-bottom: 20px;
}
@media (max-width: 1200px) {
    .home h1 {
        width: 60%;
    }
}
@media (max-width: 1000px) {
    .home h1 {
        width: 70%;
    }
}
@media (max-width: 800px) {
    .home h1 {
        width: 80%;
    }
}
.home span {
    color: rgb(154, 154, 154);
    font-size: 14px;
    display: flex;
    animation-delay: 0.2s;
}

</style>