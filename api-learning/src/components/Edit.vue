<script setup>
import { reactive, onBeforeMount } from 'vue';
import { instance } from '../composables/api';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const router = useRouter();
const props = defineProps(['id']);

onBeforeMount(() => {
  (async function () {
    const response = await instance.get(`posts/${props.id}`);
    data.title = response.data.title;
    data.author = response.data.author;
  })();
});

const data = reactive({
  title: null,
  author: null,
});


async function save() {
  try {
    if (data.title.length > 0 && data.author.length > 0) {
      await instance.patch(`posts/${props.id}`, data);

      router.push('/');
      ElMessage({
        message: 'Succesfully Edited',
        type: 'success',
      });
    } else {
      ElMessage({
        message: 'please fill the form',
        type: 'warning',
      });
    }
  } catch (e) {
    ElMessage({
      message: e.message,
      type: 'success',
    });
  }
}
</script>

<template>
  <div class="Container">
    <form @submit.prevent="post">
      <div class="Title">Test Form</div>
      <label for=""> Title </label>
      <input
        type="text"
        v-model="data.title"
        name=""
        id=""
        placeholder="Title"
        required
        minlength="2"
        v-on:keydown.enter="save"
      />

      <label for=""> Author </label>
      <input
        type="text"
        v-model="data.author"
        name=""
        id=""
        placeholder="Author"
        required
        minlength="2"
        v-on:keydown.enter="save"
      />
    </form>
    <div class="flex">
      <button @click="save" class="primary">Save</button>
      <button @click="router.push('/')" class="primary">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
@import './postStyle.css';

.flex {
  display: flex;
  gap: 20px;
}
</style>
