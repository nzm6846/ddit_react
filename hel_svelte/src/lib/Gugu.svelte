<script>
let it = "";
let ta = "";
    document.addEventListener("DOMContentLoaded",()=>{
       var btn = document.getElementById("btn");

       btn.addEventListener("click",(ev)=>{

           let dan = parseInt(it);
           let code="";

           for(let i=1; i<=9; i++){
            code +=`${dan} * ${i} = ${dan*i} \n`;
           }

           ta=code;


       })
    })
</script>

	<table>
        <tbody>
            <tr>
                <td>출력단수</td>
                <td><input type="text" id="it" bind:value={it}></td>
            </tr>
            <tr>
                <td colspan="2"><input type="button" value="출력하기"
                    id='btn'></td>
            </tr>
            <tr>
                <td colspan="2"><textarea id="ta" rows="13" cols="17" >{ta}</textarea>
                </td>
            </tr>
        </tbody>
	</table>
<style>
    table,tr,td{
        border: 1px solid gray;
    }
    input[type='text']{
        width: 40px;
    }
</style>