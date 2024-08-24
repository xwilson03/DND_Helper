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
        console.log(event.clientX, event.clientY);
    }

</script>

<div class="w-[10px] bg-zinc-600">
    <div class="relative -left-[50%] h-[200%] w-[200%] cursor-col-resize" on:mousedown={startDrag}/>
</div>