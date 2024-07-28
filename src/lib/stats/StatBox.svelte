<script lang="ts">
    export let stat_name: string;
    export let min: number = 1;
    export let max: number = 30;
    let value: number = min;
    $: mod = getMod(value);

    function update() {
        // Clamp input stat value
        if (value < min) value = min;
        else if (value > max) value = max;
    }

    function getMod(value: number) {
        let mod = Math.floor(value/2) - 5;
        return `${mod >= 0 ? "+" : ""}${mod}`;
    }
</script>

<div class="m-2 flex flex-col items-center">
    <label for={stat_name}>
        {stat_name}
    </label>
    <input
        class="aspect-square w-14 rounded-md bg-zinc-600 text-center text-4xl outline-none outline-1 outline-offset-0 transition-all hover:outline hover:outline-white focus:outline focus:outline-emerald-600"
        id={stat_name}
        type="number"
        min=0
        max=20
        bind:value={value}
        on:blur={update}
    >
    <div>
        {mod}
    </div>
</div>