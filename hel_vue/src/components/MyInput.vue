<script setup>
console.log("asd")
const props = defineProps({
    mvalue : String
});


</script>

<template>
<input type="text" v-model="props.mvalue">
</template>

<style scoped>

</style>
