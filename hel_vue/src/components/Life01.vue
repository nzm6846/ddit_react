<script setup>
import {onMounted, onUnmounted, ref} from 'vue'

const msg = ref("LIFE01")

onMounted(()=>{
  console.log("LIFE01 Mounted")
})

onUnmounted(()=>{
  console.log("LIFE01 Unmounted")
})

</script>

<template>
  {{ msg }}
</template>

<style scoped>

</style>
