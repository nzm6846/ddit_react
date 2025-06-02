<script>
import MyInside from "./lib/MyInside.svelte";
import MyInput from "./lib/MyInput.svelte";

let obj = null;
let obj_mine = "hello";
const myclick = () =>{
    obj.value = "Good Bye";
    obj_mine = "Good Bye";
}

</script>

<main>


    <input type="text" value="hello" bind:this={obj}/>
    <MyInput bind:value={obj_mine}/>
    <button onclick={myclick}>Change Text</button>
</main>

<style>

</style>
