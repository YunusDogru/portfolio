<template>
    <section class="my-services">
        <gradient-header class="about2" :title="'Transforming Ideas into Seamless User Experiences.'" style="font-size: 2.5rem"/>
        <ul class="services">
            <li class="service animGrowUp" style="animation-delay: 0.1s">
                <img class="service-img" src="~/assets/img/ui.png" alt="Icon">
                <h2 class="service-header">UI & UX</h2>
                <p class="service-text">Intuitive and engaging experiences are created for website visitors through our user interface design.</p>
            </li>
            <li class="service animGrowUp" style="animation-delay: 0.2s">
                <img class="service-img" src="~/assets/img/web.png" alt="Icon">
                <h2 class="service-header">Web App</h2>
                <p class="service-text">Dynamic and responsive websites that meet your business objectives are created.</p>
            </li>
            <li class="service animGrowUp" style="animation-delay: 0.3s">
                <img class="service-img" src="~/assets/img/creativity.png" alt="Icon">
                <h2 class="service-header">Design & Creative</h2>
                <p class="service-text">Creativity is brought to life through innovative design solutions that resonate with your target audience and elevate your brand identity.</p>
            </li>
            <li class="service animGrowUp" style="animation-delay: 0.3s">
                <img class="service-img" src="~/assets/img/coding.png" alt="Icon">
                <h2 class="service-header">Development</h2>
                <p class="service-text">The latest web development technologies are leveraged to build high-performance websites that deliver optimal user experiences.</p>
            </li>
        </ul>
    </section>
</template>
<style scoped>
    .about2 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        padding: 80px 25%;
    }
    @media (max-width: 1200px) {
        .about2  {
            padding: 80px 20% !important;
        }
    }
    @media (max-width: 1000px) {
        .about2  {
            padding: 80px 15% !important;
        }
    }
    @media (max-width: 800px) {
        .about2  {
            padding: 80px 10% !important;
        }
    }
    .services {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
        margin-bottom: 100px;
    }
    .service {
        margin: 10px 5px 10px 10px;
        width: 20%;
        padding: 140px 20px 30px 20px;
        background-color: rgb(26, 26, 26);
        border: 1px solid rgb(36,36,36);
    }
    @media (max-width: 1000px) {
        .service {
            width: calc(50% - 20px) !important;
        }
    }
    .service-img {
        width: 30px;
        margin-bottom: 20px;
    }
    .service-header {
        font-size: 18px;
        color: #9a9a9a;
        margin-bottom: 20px;
        font-family: 'Outfit', sans-serif !important;

    }
    .service-text {
        font-size: 14px;
        line-height: 20px;
        color: rgb(138,138,138);
        font-family: 'Outfit', sans-serif !important;
    }
    
</style>