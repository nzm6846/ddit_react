<script setup>


import Life01 from "./components/Life01.vue";
import Life02 from "./components/Life02.vue";
import {ref} from "vue";

const flag_life = ref(true);

const myclick = () =>{
    flag_life.value=!flag_life.value;
}

</script>

<template>
  <template v-if="flag_life">
        <Life01/><br>
  </template>
<template v-else>
  <Life02/><br>
</template>

  <button @click="myclick">toggle</button>
</template>

<style scoped>

</style>
