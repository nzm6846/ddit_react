<script setup>
import {onMounted, ref} from 'vue'

const mine = ref("");
const com = ref("");
const res = ref("");


const myclick = () => {
    if(parseInt(mine.value) == com.value){
        res.value+=`${mine.value} 정답<br>`;
        setTimeout(()=>{
          alert("정답")
        },1000)
    }else if(parseInt(mine.value) < com.value){
        res.value+=`${mine.value} 작다<br>`;
    }else{
        res.value+=`${mine.value} 크다<br>`;
    }
     mine.value ="";
}
onMounted(()=>{
  com.value=parseInt(Math.floor(Math.random()*99+1));

  console.log(com.value);
})

</script>

<template>

<table>
    <tbody>
    <tr>
        <td>맞출수</td>
        <td>
            <input type="text" id="it" v-model="mine"/>
        </td>
    </tr>
    <tr>
        <td colSpan="2">
            <input type="button" value="맞춰보기" @click="myclick"/>
        </td>
    </tr>
    <tr>
        <td colSpan="2">
            <div id="mydiv" v-html="res"></div>
        </td>
    </tr>
    </tbody>
</table>

</template>

<style scoped>
  table,tr,td{
      border: 1px solid gray;
  }
  input[type='text']{
      width: 40px;
  }
  #mydiv{
      height: 160px;
  }
</style>
