<script setup>
import { ref } from 'vue'

const myInput = ref(null);

const myclick = () => {
  myInput.value.focus();
}
</script>

<template>
  <input type="text" ref="myInput" />
  <button type="button" @click="myclick">focus</button>
</template>
