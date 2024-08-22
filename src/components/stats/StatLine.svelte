<script lang="ts">
    import StatBox from "@components/stats/StatBox.svelte";
    import {character_data as data} from "@lib/CharacterData";
</script>

<section class="pane flex gap-x-1 gap-y-3">
    <StatBox label="STR" bind:value={$data.strength}/>
    <StatBox label="DEX" bind:value={$data.dexterity}/>
    <StatBox label="CON" bind:value={$data.constitution}/>
    <StatBox label="INT" bind:value={$data.intelligence}/>
    <StatBox label="WIS" bind:value={$data.wisdom}/>
    <StatBox label="CHA" bind:value={$data.charisma}/>
</section>