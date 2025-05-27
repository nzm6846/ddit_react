<script setup>
import {ref} from 'vue'

const count = ref("100")

const myclick = () => {
  let num = parseInt(count.value);
  num++;
  count.value = num.toString();
}

</script>

<template>
  {{ count }}
  <button type="button" @click="myclick">Increase</button>

</template>

<style scoped>

</style>
