<script setup>
import { instance } from '../composables/api';
import { onBeforeMount, reactive, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { ElMessage, ElPagination } from 'element-plus';

const param = reactive({
  limit: 2,
  totalPage: 0,
});

const router = useRouter();
const route = useRoute();
const info = ref(null);
const page = route.params.id;
// Functions

const open = () => {
  ElMessage({
    message: 'Succesfully added',
    type: 'success',
  });
};

// Pagination Changer //
const nextFunc = async (e) => {
  const response = await instance.get(`posts?_page=${e}&_limit=${param.limit}`);
  info.value = response.data;
  router.push(`/home/${e}`);
};

// Getting Data from API //

async function getPost() {
  const response = await instance.get(`posts`, {
    params: {
      _page: page,
      _limit: param.limit,
    },
  });
  info.value = response.data;
  param.totalPage = response.headers['x-total-count'];
}
onBeforeMount(async () => {
  await getPost();
});

// Function Delete //

async function deleted(id) {
  try {
    await instance.delete(`posts/${id}`);
    getPost();
    // let result = await instance.get('posts');
    // info.value = result.data;
    ElMessage({
      message: 'Sucessfully Deleted',
      type: 'success',
    });
  } catch (err) {
    console.log(err);
  }
}

// Method Edit //

function edit(id) {
  router.push(`/edit/page/${id}`);
}
</script>

<template>
  <div class="Container">
    <h2>{{ $t("message.greeting") }}</h2>
    <button @click="router.push('/test/add/page')">Add New</button>

    <div class="wrapper">
      <div class="flex-container">
        <div class="content" v-for="(item, index) in info" :key="index">
          <div>
            <b> ID:{{ item.id }}</b>
          </div>
          <div>Title: {{ item.title }}</div>
          <div>Author: {{ item.author }}</div>
          <button class="del" @click="deleted(item.id)">Delete</button>
          <button class="del" @click="edit(item.id)">edit</button>
        </div>
            <h1 v-show="!info?.length">Uups No Data :(</h1>
      </div>
    </div>

    <div class="flex">
      <!-- <pagination
        v-model="param.page"
        :records="param.totalPage"
        :per-page="param.limit"
        @paginate="nextFunc"
      /> -->

      <el-pagination
        @current-change="nextFunc"
        :current-page="Number(route.params.id)"
        background
        layout="prev, pager, next, "
        :total="Number(param.totalPage)"
        :page-size="param.limit"
        :pager-count="5"
        @click="prev"
      />
    </div>
  </div>
</template>

<style>
@import './postStyle.css';
</style>
