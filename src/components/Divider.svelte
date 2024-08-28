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
        if (event.movementX == 0) return;

        if (event.movementX < 0) {
            console.log(event.movementX + " to right element.");
            console.log(-event.movementX + " to left element.");
        }
        else {
            console.log(-event.movementX + " to right element.");
            console.log(event.movementX + " to left element.");
        }
    }

</script>

<div class="w-[2px] bg-zinc-600">
    <div class="relative -left-[3px] h-full w-[8px] cursor-col-resize" on:mousedown={startDrag}/>
</div>