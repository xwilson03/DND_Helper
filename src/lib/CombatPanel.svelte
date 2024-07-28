<section class="pane flex flex-col items-center pb-2 pt-0">
    <div class="flex gap-4 p-2">
        <div class="flex flex-col items-center">
            <label for="health">
                Health
            </label>
            <input
                class="h-16 w-32 rounded-md bg-zinc-700 text-center text-4xl outline-none outline-1 outline-offset-0 transition-all hover:outline hover:outline-zinc-500 focus:bg-zinc-600 focus:outline focus:outline-white"
                id="health"
                type="number"
                min=0
            >
        </div>
        <div class="flex flex-col items-center">
            <label for="temp_health">
                Temp. Health
            </label>
            <input
                class="h-16 w-32 rounded-md bg-zinc-700 text-center text-4xl outline-none outline-1 outline-offset-0 transition-all hover:outline hover:outline-zinc-500 focus:bg-zinc-600 focus:outline focus:outline-white"
                id="temp_health"
                type="number"
                min=0
            >
        </div>
    </div>
    <div class="flex gap-x-6 p-2">
        <div class="flex flex-col items-center">
            <label for="armor_class">
                Armor
            </label>
            <input
                class="aspect-square w-11 rounded-md bg-zinc-700 text-center text-2xl outline-none outline-1 outline-offset-0 transition-all hover:outline hover:outline-zinc-500 focus:bg-zinc-600 focus:outline focus:outline-white"
                id="armor_class"
                type="number"
                min=0
            >
        </div>
        <div class="flex flex-col items-center">
            <label for="initiative">
                Initiative
            </label>
            <input
                class="aspect-square w-11 rounded-md bg-zinc-700 text-center text-2xl outline-none outline-1 outline-offset-0 transition-all hover:outline hover:outline-zinc-500 focus:bg-zinc-600 focus:outline focus:outline-white"
                id="initiative"
                type="number"
                min=0
            >
        </div>
        <div class="flex flex-col items-center">
            <label for="speed">
                Speed
            </label>
            <input
                class="aspect-square w-11 rounded-md bg-zinc-700 text-center text-2xl outline-none outline-1 outline-offset-0 transition-all hover:outline hover:outline-zinc-500 focus:bg-zinc-600 focus:outline focus:outline-white"
                id="speed"
                type="number"
                min=0
            >
        </div>
    </div>
</section>