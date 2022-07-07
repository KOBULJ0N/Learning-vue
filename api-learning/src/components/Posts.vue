<script setup>
import { instance } from '../composables/api';
import { onBeforeMount, reactive, ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
const data = reactive({
  title: null,
  author: null,
});

const info = ref(null);

// Getting Data from API

onBeforeMount(() => {
  (async function () {
    const response = await instance.get('posts');
    info.value = response.data;
  })();
});

const open = () => {
  ElMessage({
    message: 'Succesfully added',
    type: 'success',
  });
};
// Method Post

async function post() {
  try {
    await instance.post('posts', data);
    let result = await instance.get('posts');
    info.value = result.data;
    data.title = data.author = '';
    open();
  } catch (error) {
    ElMessage({
      message: error.message,
      type: 'warning',
    });
  }
}
// Function Delete


async function deleted(id) {
  try {
    await instance.delete(`posts/${id}`);
    let result = await instance.get('posts');
      info.value = result.data;
     ElMessage({
      message: 'Sucessfully Deleted',
      type: 'success',
    });
  } catch (err) {
    console.log(err);
  }
}

// Method Delete
</script>

<template>
  <div class="Container">
    <form @submit.prevent="post">
      <div class="Title">Test Form</div>
      <label for="">
        Title
        <input
          type="text"
          v-model="data.title"
          name=""
          id=""
          placeholder="Title"
        />
      </label>
      <label for="">
        Author
        <input
          type="text"
          v-model="data.author"
          name=""
          id=""
          placeholder="Author"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    <div class="Title">Data from API</div>
    <div class="wrapper">
      <div class="flex-container">
        <div class="content" v-for="(item, index) in info" :key="index">
          <div>ID: {{ item.id }}</div>
          <div>Title: {{ item.title }}</div>
          <div>Author: {{ item.author }}</div>

          <button class="del" @click="deleted(item.id)">Delete</button>
        </div>
      </div>

      <!-- <div class="contenTitle">Author</div> -->
    </div>
  </div>
</template>

<style>
@import './postStyle.css';
</style>
