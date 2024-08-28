<script>
    import Divider from "./Divider.svelte";

</script>

<div class="flex h-full w-full">
    <slot name="a"/>

    <Divider/>
    <slot name="b">
        <div class="flex-grow"/>
    </slot>
    
    {#if $$slots.c}
        <Divider/>
        <slot name="c"/>
    {/if}
</div>