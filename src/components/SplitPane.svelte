<script>
    import Divider from "./Divider.svelte";

    let a, b, c;
</script>

<div class="flex h-full w-full">
    <div bind:this={a} class="flex">
        <slot name="a"/>
    </div>

    <Divider left={a} right={b}/>
    <div bind:this={b} class={$$slots.b ? "flex" : "flex flex-grow"}>
        <slot name="b"/>
    </div>

    {#if $$slots.c}
    <Divider left={b} right={c}/>
    <div bind:this={c} class="flex">
        <slot name="c"/>
    </div>
    {/if}
</div>