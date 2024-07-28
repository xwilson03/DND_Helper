<script lang="ts">
    import LabeledNumber from "./components/LabeledNumber.svelte";
</script>

<section class="pane flex flex-col items-center pb-2 pt-0">
    <div class="flex gap-4 p-2">
        <LabeledNumber
            label="Health"
            input_style="h-16 w-32"
        />
        <LabeledNumber
            label="Temp. Health"
            input_style="h-16 w-32"
        />
    </div>
    <div class="flex gap-x-6 p-2">
        <LabeledNumber
            label="Armor"
            input_style="aspect-square w-11"
        />
        <LabeledNumber
            label="Initiative"
            input_style="aspect-square w-11"
        />
        <LabeledNumber
            label="Speed"
            input_style="aspect-square w-11"
        />
    </div>
</section>