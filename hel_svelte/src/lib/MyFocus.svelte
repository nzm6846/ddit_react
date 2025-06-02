<script>
    let myInput;

    const focusInput = () =>{
        myInput.focus();
    }
</script>

<input type="text" bind:this={myInput}/><br>
<button onclick={focusInput}>FOCUS</button>
