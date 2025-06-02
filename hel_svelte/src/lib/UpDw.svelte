<script>
    let mine=""
    let com =Math.floor(Math.random()*100+1);
    let res = ""

    const myclick = () =>{
        console.log(com);
        if(parseInt(mine) == com){
            res+=`${mine} 정답<br>`;
        }else if(parseInt(mine) < com){
            res+=`${mine} 작다<br>`;
        }else{
            res+=`${mine} 크다<br>`;
        }
         mine ="";
    }

</script>


<table>
    <tbody>
    <tr>
        <td>맞출수</td>
        <td>
            <input type="text" id="it" bind:value={mine}/>
        </td>
    </tr>
    <tr>
        <td colSpan="2">
            <input type="button" value="맞춰보기" onclick={myclick}/>
        </td>
    </tr>
    <tr>
        <td colSpan="2">
            <div id="mydiv">{@html res}</div>
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
    #mydiv{
        height: 160px;
    }
</style>
