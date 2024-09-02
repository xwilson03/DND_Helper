<script lang="ts">
    import {character_data as data} from "@/lib/CharacterData"
    import LabeledNumber from "./LabeledNumber.svelte";
</script>

<section class="pane flex flex-col items-stretch gap-y-4 overflow-scroll">
    {#each $data.spells as spellLevel}
        <div class="flex flex-col items-center gap-y-2 rounded-lg bg-zinc-900 bg-opacity-80 p-2 text-center">
            <div class="mb-2 w-fit border-b border-zinc-400 px-3 pb-0.5"> {spellLevel.level} Level </div>

            {#each spellLevel.spells as spell}
                <button
                    class={`h-full w-full flex-grow rounded-lg border text-center transition-all hover:bg-opacity-70 ${spell.prepared ? "bg-zinc-700 border-zinc-600" : "bg-zinc-800 border-transparent"}`}
                    on:click={() => (spell.prepared = !spell.prepared)}
                >
                    {spell.name}
                </button>
            {/each}

            <div class="grid h-full w-fit grid-cols-3 items-center px-8 py-1">
                <LabeledNumber label="Slots" input_style="w-12 text-2xl aspect-square bg-zinc-600" value={spellLevel.current_slots} max={spellLevel.max_slots}/>
                <h1 class="text-2xl"> / </h1>
                <LabeledNumber label="Max Slots" input_style="w-12 text-2xl aspect-square bg-zinc-600" value={spellLevel.max_slots}/>
            </div>
        </div>

    {/each}
</section>