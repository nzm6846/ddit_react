<script setup>
import {ref} from 'vue'
const dan=ref(".");
const output=ref("..");

const myClick = () =>{

  let code="";

  for(let i=1; i<=9; i++){
    code+=`${dan.value} * ${i} = ${dan.value*i} \n`;
  }


  output.value=code;

}

</script>

<template>
	<table>
        <tbody>
            <tr>
                <td>출력단수</td>
                <td><input type="text" id="it" v-model.number="dan"></td>
            </tr>
            <tr>
                <td colspan="2"><input type="button" value="출력하기"
                    id='btn' @click="myClick"></td>
            </tr>
            <tr>
                <td colspan="2"><textarea id="ta" rows="13" cols="17" >{{output}}</textarea>
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
</style>
