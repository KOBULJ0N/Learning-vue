<script setup>

import { useRoute } from 'vue-router';
import PostsVue from '../components/Posts.vue';

const route = useRoute()
const id = route.params.id

</script>

<template>
    <PostsVue />
</template>


<style>
@import '../components/postStyle.css';
</style>