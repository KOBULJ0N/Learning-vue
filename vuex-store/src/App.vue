<template>
<button @click="inc">Clicked : {{counted}}</button>
</template>

<script>

export default {
  data() {
    return {
      counted: 0,
    }
  },

  computed: {
    counted() {
return  this.counted = this.$store.state.count
    } 
  },

  methods: {
    inc() {
  this.$store.commit('increment')
    }
  },


}


</script>

