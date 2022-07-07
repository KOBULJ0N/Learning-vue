<script setup>
import Posts from './components/Posts.vue';
import Loading from './components/Loading.vue';
</script>

<template>
  <Suspense>
    <Posts />
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
