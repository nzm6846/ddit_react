<script setup>
import {ref} from 'vue'

const mine = ref(".");
const com = ref("..");
const res = ref("...");


const arr= ["홀","짝"];

const myClick = () =>{

    let ran = Math.floor(Math.random()*2);
    console.log(arr[ran]);
    com.value = arr[ran];

    if(arr[ran]===mine.value) {
        res.value = "정답";
    }else{
        res.value ="오답";
    }
}

</script>

<template>
	<table>
        <tbody>
            <tr>
                <td> 나 </td>
                <td>
                    <input type="text" v-model="mine">
                </td>
            </tr>
            <tr>
                <td> 컴 </td>
                <td>
                    <input type="text" :value="com" >
                </td>
            </tr>
            <tr>
                <td> 결과 </td>
                <td>
                    <input type="text":value="res" >
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="게임하기" @click="myClick" >
                </td>
            </tr>
        </tbody>
	</table>

</template>

<style scoped>
    table,tr,td{
        border: 1px solid gainsboro;
    }
    input[type='text']{
        width: 40px;
    }
</style>
