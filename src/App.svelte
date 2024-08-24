<script>
    import NamePlate from "./components/NamePlate.svelte";
    import StatLine from "./components/stats/StatLine.svelte";
    import CombatPanel from "./components/CombatPanel.svelte";
    import EquipmentPanel from "./components/EquipmentPanel.svelte";
    import SpellList from "./components/SpellList.svelte";
    import Divider from "./components/Divider.svelte";
</script>

<main class="flex h-screen w-screen bg-zinc-900 text-white">
    <div class="flex flex-col">
        <NamePlate />
        <StatLine />
        <CombatPanel />
        <EquipmentPanel />
        <div class="pane flex-grow"/>
    </div>
    <Divider />
    <div class="flex flex-grow"/>
    <div class="flex flex-col">
        <SpellList/>
        <div class="pane flex-grow">
    </div>
</main>
