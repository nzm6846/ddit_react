<script setup>
import {ref} from 'vue'

let arr45 = [
		1,2,3,4,5,	6,7,8,9,10,
		11,12,13,14,15,	16,17,18,19,20,
		21,22,23,24,25,	26,27,28,29,30,
		31,32,33,34,35,	36,37,38,39,40,
		41,42,43,44,45
	];
  let l1=ref("__");
  let l2=ref("__");
  let l3=ref("__");
  let l4=ref("__");
  let l5=ref("__");
  let l6=ref("__");


const myclick = () => {
  for(let i=0; i<1000; i++){
    let ran = Math.floor(Math.random()*45);
    let temp= arr45[0];
    arr45[0]=arr45[ran];
    arr45[ran]=temp;
  }

  for(let i=0; i<6; i++){
		for(let j=i+1; j<6; j++){
			if(arr45[i]>arr45[j]){
				let temp = arr45[i];
				arr45[i]=arr45[j];
				arr45[j]=temp;
			}
		}
	}

  l1.value= arr45[0].toString();
  l2.value= arr45[1].toString();
  l3.value= arr45[2].toString();
  l4.value= arr45[3].toString();
  l5.value= arr45[4].toString();
  l6.value= arr45[5].toString();


}

</script>

<template>
<table>

    <tbody>
	<tr>
		<td><span class="myspan">{{l1}}</span></td>
		<td><span class="myspan">{{l2}}</span></td>
		<td><span class="myspan">{{l3}}</span></td>
		<td><span class="myspan">{{l4}}</span></td>
		<td><span class="myspan">{{l5}}</span></td>
		<td><span class="myspan">{{l6}}</span></td>
	</tr>
	<tr>
		<td colspan="6">
			<button @click="myclick">로또생성하기</button>
		</td>
	</tr>
    </tbody>
</table>

</template>

<style scoped>
	talbe,tr,td{
		border: 1px solid gray;
	}
</style>
