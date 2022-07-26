<script setup>
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';
import { dataSource, columns } from './components/mock';
import { ref } from 'vue';
// import { MenuProps } from 'ant-design-vue';

const handleChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


const users = ref([
  {
    value: 'jack',
    name: 'Jack',
  },
   {
    value: 'mike',
    name: 'Mike',
  },
   {
    value: 'john',
    name: 'John',
  },
]);

const value = ref(users.value[0])


const column = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];
</script>

<template>
  <div class="box">
    <div class="header">
      <div>
        <div class="subtitle">
          <span>&#8592;</span>&nbsp; График платежей
          <div class="description">05.06.2022 - 05.06.2025</div>
        </div>
      </div>
      <h2>use a-select-option</h2>
      <a-select
        ref="select"
        v-model="value"
        style="width: 120px"
        @focus="focus"
        @change="handleChange"
      >
        <a-select-option v-for="(item, index) in users"  :value="item.value">{{item.name}}</a-select-option>
    
      </a-select>
    </div>
    <div class="main">
      <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="false"
      />

      <div>
        <a-table :columns="column" :data-source="data" @change="onChange" />
      </div>
      <button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
    </div>
  </div>
</template>
