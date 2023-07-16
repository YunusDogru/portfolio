<template>
    <section class="navbar">
        <div class="mail animFadeIn">
            <ul>
                <li>
                    <a href="mailto:yunusdogru21@gmail.com" class="mail-wrapper">
                        <Icon class="mail-icon" name="material-symbols:mail-outline"/>    
                    </a> 
                </li>
                <li>
                    <a href="mailto:yunusdogru21@gmail.com" class="getInTouch">Get in touch</a>
                </li>
            </ul>           
        </div> 
        <social-links/> 
    </section>    
</template>
<style>
.navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10%;
    border-bottom: 1px solid rgba(51, 51, 51,0.5);
}
@media (max-width: 1200px) {
    .navbar {
        padding: 10px 20px;
    }
}
.mail {
    flex: 5;
}
.mail ul{
    display: flex;
    align-items: center;
}

.mail .mail-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 50%;
    color: rgb(154, 154, 154);
    background-color: #1a1a1a;
    border: 1px solid rgba(154, 154, 154, 0.1);
}
.mail-icon {
    font-size: 1.2rem;
}
.mail ul li a {
    color: rgb(141, 141, 141);
    font-size: 13px;
    margin-left: 10px;
    margin-right: 2px;
    transition: color 0.3s ease;
}

.mail ul li a:hover {
    color: rgb(218, 218, 218);
}
</style>
