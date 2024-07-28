<script>
    import StatBox from "./StatBox.svelte";
</script>

<section class="flex flex-col items-stretch gap-x-1 gap-y-3 bg-zinc-800 p-1">
    <StatBox stat_name="STR" />
    <StatBox stat_name="DEX" />
    <StatBox stat_name="CON" />
    <StatBox stat_name="INT" />
    <StatBox stat_name="WIS" />
    <StatBox stat_name="CHA" />
</section>