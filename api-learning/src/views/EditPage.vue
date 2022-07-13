<script setup>
import { useRoute } from 'vue-router';
import EditVue from '../components/Edit.vue';
const route = useRoute()
const id = route.params.id
</script>

<template>
<EditVue :id="id"/>
</template>