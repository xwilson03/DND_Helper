<script lang="ts">
    export let label: String;
    export let value: number;
    export let container_style: String = "";
    export let input_style: String = "";
    export let min: number = 0;
    export let max: number = 99;

    let id = label.toLowerCase().replace(/\s/g, "");

    function update() {
        // Clamp input stat value
        if (value < min) value = min;
        else if (value > max) value = max;
    }
</script>

<div class="flex flex-col items-center {container_style}">
    <label for={id}>
        {label}
    </label>
    <input
        class="rounded-md bg-zinc-700 text-center text-4xl outline-none outline-1 outline-offset-0 transition-all hover:outline hover:outline-zinc-500 focus:bg-zinc-600 focus:outline focus:outline-white {input_style}"
        id={id}
        type="number"
        min={min}
        max={max}
        bind:value={value}
        on:blur={update}
    >
    <slot />
</div>