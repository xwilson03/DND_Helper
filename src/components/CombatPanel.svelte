<script lang="ts">
    import LabeledNumber from "@components/LabeledNumber.svelte";
    import {character_data as data} from "@lib/CharacterData";
</script>

<section class="pane flex flex-col items-center gap-y-2">
    <div class="flex gap-x-4">
        <LabeledNumber
            label="HP"
            bind:value={$data.health}
            bind:max={$data.max_health}
            input_style="h-16 w-32"
        />
        <LabeledNumber
            label="Temporary HP"
            bind:value={$data.temp_health}
            input_style="h-16 w-32"
        />
    </div>
    <div class="flex gap-x-6 pb-1">
        <LabeledNumber
            label="Max HP"
            bind:value={$data.max_health}
            input_style="aspect-square w-11"
        />
        <LabeledNumber
            label="Armor"
            bind:value={$data.armor_class}
            input_style="aspect-square w-11"
        />
        <LabeledNumber
            label="Initiative"
            bind:value={$data.initiative}
            input_style="aspect-square w-11"
        />
        <LabeledNumber
            label="Speed"
            bind:value={$data.speed}
            input_style="aspect-square w-11"
        />
    </div>
</section>