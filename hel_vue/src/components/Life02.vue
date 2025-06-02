<script setup>
import {onMounted, onUnmounted, ref} from 'vue'

const msg = ref("LIFE02")

onMounted(()=>{
  console.log("LIFE02 Mounted")
})

onUnmounted(()=>{
  console.log("LIFE02 Unmounted")
})

</script>

<template>
  {{ msg }}
</template>

<style scoped>

</style>
