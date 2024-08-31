<script>
    import NamePlate from "./components/NamePlate.svelte";
    import StatLine from "./components/stats/StatLine.svelte";
    import CombatPanel from "./components/CombatPanel.svelte";
    import EquipmentPanel from "./components/EquipmentPanel.svelte";
    import SpellList from "./components/SpellList.svelte";
    import { Pane, Splitpanes as SplitPane } from "svelte-splitpanes";
</script>

<main class="flex h-screen w-screen bg-zinc-900 text-white">
    <SplitPane>
        <Pane class="flex flex-col">
            <NamePlate />
            <StatLine />
            <CombatPanel />
            <div class="pane flex-grow"/>
        </Pane>
        <Pane>
            <div class="h-full w-full bg-zinc-900"/>
        </Pane>
        <Pane class="flex flex-col">
            <EquipmentPanel />
            <SpellList/>
            <div class="pane flex-grow">
        </Pane>
    </SplitPane>
</main>
