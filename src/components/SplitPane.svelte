<script lang="ts">

    var isDragging: boolean = false;

    function startDrag() {
        isDragging = true;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);
    }
    
    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }

    function drag(event: MouseEvent) {
        console.log(event.movementX);
    }

</script>

<div class="flex h-full w-full">
    <slot name="a"/>
    {#if $$slots.b}
        <div class="w-[2px] bg-zinc-600">
            <div class="relative -left-[50%] h-full w-[200%] cursor-col-resize" on:mousedown={startDrag}/>
        </div>
        <slot name="b"/>
    {/if}
    {#if $$slots.c}
        <div class="w-[2px] bg-zinc-600">
            <div class="relative -left-[50%] h-full w-[200%] cursor-col-resize" on:mousedown={startDrag}/>
        </div>
        <slot name="c"/>
    {/if}
</div>