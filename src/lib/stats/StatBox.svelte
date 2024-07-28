<script>
    export let stat_name;
    export let min = 0;
    export let max = 20;
    let data;

    function validate() {
        if (data < min) data = min;
        else if (data > max) data = max;
    }
</script>

<div class="m-2 flex flex-col items-center">
    <label for={stat_name}>
        {stat_name}
    </label>
    <input
        class="aspect-square w-14 rounded-md bg-zinc-600 text-center text-4xl"
        id={stat_name}
        type="number"
        min=0
        max=20
        bind:value={data}
        on:input={validate}
    >
</div>