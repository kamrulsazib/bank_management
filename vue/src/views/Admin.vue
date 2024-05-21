<script setup>
import NavbarView from './inc/NavbarView.vue';
import Header from './inc/Header.vue';
import Footer from './inc/Footer.vue';
</script>
<template>
    <section class="main_content dashboard_part">
        <Header />
        <NavbarView />
                <router-view />
         
        
        <Footer />
    </section>
</template>