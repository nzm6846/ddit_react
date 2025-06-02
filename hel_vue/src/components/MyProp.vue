<script setup>
import {ref} from 'vue'

const props = defineProps({
  alt : String,
  src : String
})


</script>

<template>
속성:{{ alt }}
<img v-bind:src="src">
<img :src="src">

</template>

<style scoped>

</style>
