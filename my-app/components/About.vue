<template>
    <section class="about">
        <div class="image animFadeBottom">
            <img src="~/assets/img/about1.jpeg" alt="aboutImg">
        </div>
        <div class="about-content">
            <h1 class="about-header animFadeIn">About me</h1>
            <p class="about-text animFadeRight">
                Hey there! I'm a frontend developer with a strong passion for creating visually appealing designs. Over the past 2 years, I've been fully immersed in frontend development, constantly honing my skills and keeping up with the latest trends.
            </p><br>
            <p class="about-text animFadeRight">
                I excel at creating impactful user interfaces that enhance the user experience. I enjoy collaborating with designers and backend developers to transform ideas into visually stunning and intuitive interfaces. My goal is to deliver seamless user experiences through responsive layouts, interactive elements, and smooth animations.
            </p><br>
            <p class="about-text animFadeRight">If you'd like to check out some of my projects, you can find them on my <a target="_blank" href="https:github.com/YunusDogru">GitHub.</a></p>
            <br>
            <p class="about-text animFadeRight">For a glimpse into my work and personal projects, feel free to visit my <a target="_blank" href="https://instagram.com/_yunusdogru">Instagram.</a></p>
        </div>
    </section>
</template>

<style scoped>
.about {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width: 1000px) {

    .about-content {
        padding: 40px !important;
        text-align: center;
        flex: 2;
    }
    .image {
        border: none !important;
    }
}
@media (max-width: 800px) {
    .about {
        flex-direction: column;
    }
}
.image {
    flex: 2;
    padding: 40px;
    border-right: 1px dashed rgba(154, 154, 154,0.3);
}
.image img {
    width: 100%;
    border-radius: 5px;
}
.about-content {
    flex: 5;
    align-self: flex-start;
    padding: 80px;
}
.about-header {
    color: rgb(154, 154, 154);
    font-size: 2.5rem;
    margin-bottom: 70px;
}
.about-text {
    color: rgba(154,154,154, 0.7);
    font-size: 16px;
    line-height: 30px;
}
.about-text a {
    color: transparent;
    background-clip: text;
    text-decoration-style: solid;
    background-color: rgb(233, 233, 233);
}
.about-text a:hover {
    text-decoration: underline;
    text-decoration-color: #fff;
}
</style>