<script setup>
import {onMounted, ref} from 'vue'
import axios from "axios";

const list =ref([
    {'m_id':'1', 'm_name':'1','tel':'1','email':'1'},
    {'m_id':'2', 'm_name':'2','tel':'2','email':'2'},
    {'m_id':'3', 'm_name':'3','tel':'3','email':'3'},
])

const vo = ref({'m_id':'', 'm_name':'','tel':'','email':''})

const fn_list = async() =>{
	let resp = await axios.get('http://localhost:8080/mem_list.ajax');
	list.value = resp.data;
}

const fn_one = async (e) =>{
  console.log(e);
	let pm_id =e
	let resp = await axios.post('http://localhost:8080/mem_detail.ajax',{m_id:pm_id});

	vo.value = resp.data;
}

const fn_add = async() =>{

	let memVo = vo.value

	let resp = await axios.post('http://localhost:8080/mem_add.ajax', memVo)

    	let cnt = resp.data;
    	if(cnt==1){
    		alert("정상적으로 추가되었습니다.");
    		fn_list();
    		vo.m_id= "";
    		vo.m_name= "";
    		vo.tel= "";
    		vo.email= "";

    	} else {
    		alert("추가도중 문제가 생겼습니다.");
    	}

}

const fn_mod = async () =>{

	let memVo = vo.value;

	let resp = await axios.post('http://localhost:8080/mem_mod.ajax', memVo)
  console.log(resp);
    	let cnt = resp.data;
    	if(cnt==1){
    		alert("정상적으로 수정되었습니다.");
    		fn_list();
    		vo.m_id= "";
    		vo.m_name= "";
    		vo.tel= "";
    		vo.email= "";

    	} else {
    		alert("수정도중 문제가 생겼습니다.");
    	}

}

const fn_del =async () =>{

	let flag_c = confirm("한번 지워진 데이터는 복구불가합니다.\n삭제하시렵니까?");
	if(!flag_c){
		return
	}

	let memVo = vo.value;

	let resp = await axios.post('http://localhost:8080/mem_del.ajax',memVo)
    	let cnt = resp.data;
		console.log(cnt)
    	if(cnt==1){
    		alert("정상적으로 삭제되었습니다.");
    		fn_list();
    		vo.m_id= "";
    		vo.m_name= "";
    		vo.tel= "";
    		vo.email= "";

    	} else {
    		alert("삭제도중 문제가 생겼습니다.");
    	}
}

onMounted(()=>{
  fn_list();
})

</script>

<template>
    <table>
	<thead>
		<tr>
			<td>사번</td>
			<td>이름</td>
			<td>전화</td>
			<td>메일</td>
		</tr>
	</thead>
	<tbody id="my_tbody">
		<tr v-for="vo in list" :key="vo.m_id">
			<td><a @click="fn_one(vo.m_id)">{{ vo.m_id }}</a></td>
			<td>{{ vo.m_name }}</td>
			<td>{{ vo.tel }}</td>
			<td>{{ vo.email }}</td>
		</tr>
	</tbody>
</table>
<table>
	<tbody>
		<tr>
			<td>사번</td>
			<td>
				<input type="text" v-model="vo.m_id"/>
			</td>
		</tr>
		<tr>
			<td>이름</td>
			<td>
				<input type="text" v-model="vo.m_name"/>
			</td>
		</tr>
		<tr>
			<td>전화</td>
			<td>
				<input type="text" v-model="vo.tel"/>
			</td>
		</tr>
		<tr>
			<td>메일</td>
			<td>
				<input type="text" v-model="vo.email"/>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<input type="button" value="추가" @click="fn_add()"/>
				<input type="button" value="수정" @click="fn_mod()"/>
				<input type="button" value="삭제" @click="fn_del()"/>
			</td>
		</tr>
	</tbody>
</table>
</template>

<style scoped>
  table,tr,td{
    border: 1px solid grey;
    text-align: center;
  }
  input[type='text']{
    width: 50px;
  }
  a{
	  color: blue;
	  text-decoration-line: underline;
  }
  a:hover{
	  cursor: pointer;
  }
</style>
