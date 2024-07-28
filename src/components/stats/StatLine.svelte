<script lang="ts">
    import StatBox from "@components/stats/StatBox.svelte";
    import {character_data as data} from "@lib/CharacterData";
</script>

<section class="pane flex gap-x-1 gap-y-3">
    <StatBox stat_name="STR" value={$data.strength}/>
    <StatBox stat_name="DEX" value={$data.dexterity}/>
    <StatBox stat_name="CON" value={$data.constitution}/>
    <StatBox stat_name="INT" value={$data.intelligence}/>
    <StatBox stat_name="WIS" value={$data.wisdom}/>
    <StatBox stat_name="CHA" value={$data.charisma}/>
</section>