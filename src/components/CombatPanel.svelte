<script lang="ts">
    import LabeledNumber from "@components/LabeledNumber.svelte";
    import {character_data as data} from "@lib/CharacterData";
</script>

<section class="pane flex flex-col items-center gap-y-2">
    <div class="flex gap-x-4">
        <LabeledNumber
            label="Health"
            value={$data.health}
            input_style="h-16 w-32"
        />
        <LabeledNumber
            label="Temp. Health"
            value={$data.temp_health}
            input_style="h-16 w-32"
        />
    </div>
    <div class="flex gap-x-6 pb-1">
        <LabeledNumber
            label="Armor"
            value={$data.armor_class}
            input_style="aspect-square w-11"
        />
        <LabeledNumber
            label="Initiative"
            value={$data.initiative}
            input_style="aspect-square w-11"
        />
        <LabeledNumber
            label="Speed"
            value={$data.speed}
            input_style="aspect-square w-11"
        />
    </div>
</section>