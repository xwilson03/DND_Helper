<script lang="ts">
    import LabeledNumber from "../LabeledNumber.svelte";

    export let label: string;
    export let value: number;
    $: mod = getMod(value);

    function getMod(value: number) {
        let mod = Math.floor(value/2) - 5;
        return `${mod >= 0 ? "+" : ""}${mod}`;
    }
</script>

<LabeledNumber
    label={label}
    input_style="aspect-square w-10 text-2xl"
    container_style="mx-1"
    bind:value={value}
    max={30}
>
    <div class={value > 11 ? "text-emerald-200" : value < 10 ? "text-rose-300" : "text-amber-100"}>
        {mod}
    </div>
</LabeledNumber>