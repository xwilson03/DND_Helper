<script lang="ts">
    import StatBox from "@components/stats/StatBox.svelte";
    import {character_data as data} from "@lib/CharacterData";
</script>

<section class="pane flex gap-x-1 gap-y-3">
    <StatBox label="STR" value={$data.strength}/>
    <StatBox label="DEX" value={$data.dexterity}/>
    <StatBox label="CON" value={$data.constitution}/>
    <StatBox label="INT" value={$data.intelligence}/>
    <StatBox label="WIS" value={$data.wisdom}/>
    <StatBox label="CHA" value={$data.charisma}/>
</section>