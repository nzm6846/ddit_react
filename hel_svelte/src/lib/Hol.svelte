<script>
let mine=".";
let com="..";
let res="...";
const arr= ["홀","짝"];

const myClick = () =>{

    let ran = Math.floor(Math.random()*2);

    com = arr[ran];

    if(arr[ran]===mine) {
        res = "정답";
    }else{
        res ="오답";
    }
}

</script>

	<table>
        <tbody>
            <tr>
                <td> 나 </td>
                <td>
                    <input type="text" bind:value={mine}>
                </td>
            </tr>
            <tr>
                <td> 컴 </td>
                <td>
                    <input type="text" value={com}>
                </td>
            </tr>
            <tr>
                <td> 결과 </td>
                <td>
                    <input type="text" value={res}>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="게임하기" on:click={myClick}>
                </td>
            </tr>
        </tbody>
	</table>
<style>
    table,tr,td{
        border: 1px solid gainsboro;
    }
    input[type='text']{
        width: 40px;
    }
</style>
