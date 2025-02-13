<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue';
import {Toast} from 'primevue';
</script>

<template>
    <Toast></Toast>

    <TheNavbar/>

    <RouterView />
</template>

<style scoped>

</style>
