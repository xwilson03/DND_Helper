<script>
    import Divider from "./Divider.svelte";

</script>

<div class="flex h-full w-full">
    <slot name="a"/>

    {#if $$slots.b}
        <Divider/>
        <slot name="b"/>
    {/if}
    
    {#if $$slots.c}
        <Divider/>
        <slot name="c"/>
    {/if}
</div>