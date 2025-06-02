<script setup>


import {ref} from "vue";
import MyInput from "./components/MyInput.vue";
let obj = ref(null);
let obj_value = ref("hello")

const myclick = () =>{
  obj.value.value = "bye";
  obj_value.value = "bye";
}
</script>

<template>
  <input type="text" value="hello" ref="obj"><br>
  <MyInput :value="obj_value"/><br>
  <button @click="myclick">Change Text</button>
</template>

<style scoped>

</style>
