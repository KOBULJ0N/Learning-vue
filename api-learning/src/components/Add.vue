<script setup>
import { reactive, ref } from 'vue';
import { instance } from '../composables/api';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter()
const data = reactive({
  title: null,
  author: null,
});

const info = ref(null);

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
    router.push('/')


  } catch (error) {
    ElMessage({
      message: error.message,
      type: 'warning',
    });
  }
}
</script>

<template>
<div class="Container">


    <form @submit.prevent="post">
      <div class="Title">Form</div>
      <label for="">Title </label>
        <input
          type="text"
          v-model="data.title"
          name=""
          id=""
          placeholder="Title" 
          required
          minlength="2"
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
        />
 
      <button type="submit">Submit</button>
    </form>
    </div>
</template>


<style>
@import './postStyle.css';
</style>