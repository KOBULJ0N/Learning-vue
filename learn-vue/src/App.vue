<script setup>
import { ref, computed } from 'vue';

const header = ref('Shopping List app');
const items = ref([
  { id: 1, label: '10 party hats', highPriority: false, purchased: true },
  { id: 2, label: '2 board games', highPriority: false, purchased: true },
  { id: 3, label: '20 cups', highPriority: true, purchased: false },
]);

// Refs
const newItem = ref(null);
const highPriorityItem = ref(false);
const editing = ref(false);

// Functions
const saveItem = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    highPriority: highPriorityItem.value,
  });
  newItem.value = '';
  highPriorityItem.value = '';
  console.log(items.value, 'resss');
};

const doEdit = (e) => {
  editing.value = e;
  newItem.value = '';
  highPriorityItem.value = '';
};

const togglePurchased = (item) => {
  item.purchased = !item.purchased;
};

const characterCount = computed(() => newItem.value.length);

const reversedItems = computed(() => {
  return [...items.value].reverse();
});
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <div v-if="editing" class="btn btn-primary" @click="doEdit(false)">
      Cancel
    </div>
    <div v-else class="btn btn-primary" @click="doEdit(true)">Add an Item</div>
  </div>
  <div v-if="editing" class="flex">
    <p class="count">{{ characterCount }}/200</p>
    <a target="_blank" v-bind:href="newItem">Dynamick Link</a>
  </div>
  <form v-if="editing" @submit.prevent="saveItem" class="add-item-form">
    <input v-model="newItem" type="text" placeholder="Add an Item" />

    <label>
      <input v-model="highPriorityItem" type="checkbox" />
      High Priority
    </label>
    <button :disabled="newItem.length < 2" class="btn btn-primary">
      Save Item
    </button>
  </form>
<!-- <a href="tel:+998943083808">Click Here To Call Support 94 308 38 08</a> -->
  <ul>
    <li
      v-for="(item, index) in reversedItems"
      :key="item.id"
      class="static-class"
      @click="togglePurchased(item)"
      :class="{
        strikeout: item.purchased,
        priority: item.highPriority,
      }"
    >
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">Nothing to see here</p>
</template>

<style>
@import './style.css';
</style>
