<script>
    let count = "100";

    const myclick = () => {
        let num = parseInt(count);
        num++;
        count = num.toString();


    }
</script>

{count}
<button onclick={myclick}>
INCREASE
</button>
