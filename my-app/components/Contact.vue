<template>
    <section class="contact">
        <div class="send-mail">
            <gradient-header class="send-mail-hdr" :title="'Tell me about your next project'" style="font-size: 3rem"/>
            <link-button class="mail-btn" :link="'mailto:yunusdogru21@gmail.com'" :title="'Get in touch'" :icon="'material-symbols:mail-outline'"/>
        </div>
        <div class="footer">
            <p class="animFadeIn">© 2023 All rights reserved.</p>
            <social-links/>
        </div>
    </section>
</template>

<style scoped>
.contact {
    
}
.send-mail {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 80px 0;
    border-top: 1px solid rgba(51,51,51,0.5);
    border-bottom: 1px solid rgba(51,51,51,0.5);
}
.send-mail-hdr {
    padding: 20px 25%;
    width: 100%;

}
@media (max-width: 1200px) {
    .send-mail-hdr  {
        padding: 20px 20% !important;
    }
}
@media (max-width: 1000px) {
    .send-mail-hdr  {
        padding: 20px 15% !important;
    }
}
@media (max-width: 800px) {
    .send-mail-hdr  {
        padding: 20px 10% !important;
    }
}
.mail-btn {
    margin-top: 30px;
}
.footer {
    padding: 30px 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100vw;
}
@media (max-width: 1200px) {
    .footer {
        padding: 30px 20px !important;
    }
}
.footer p {
    font-size: 0.9rem;
    color: rgb(138,138,138);
}
</style>