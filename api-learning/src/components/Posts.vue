<script setup>
import { instance } from '../composables/api';
import { onBeforeMount, reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { ElMessage } from 'element-plus';


const router = useRouter()
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

// Method Edit

function edit(id) {
router.push(`/editPage/${id}`)
}

</script>

<template>
  <div class="Container">
    <div class="Title">Data from API</div>
    
    <div class="wrapper">
      <div class="flex-container">
        <button @click="router.push('/addPage')" >Add New</button>
        <div class="content" v-for="(item, index) in info" :key="index">
          <div>ID: {{ item.id }}</div>
          <div>Title: {{ item.title }}</div>
          <div>Author: {{ item.author }}</div>

          <button class="del" @click="deleted(item.id)">Delete</button>
           <button class="del" @click="edit(item.id)">edit</button>
        </div>
      </div>

      <!-- <div class="contenTitle">Author</div> -->
    </div>
  </div>
</template>


<style>
@import './postStyle.css';
</style>