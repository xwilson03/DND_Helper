<script>
    import NamePlate from "./components/NamePlate.svelte";
    import StatLine from "./components/stats/StatLine.svelte";
    import CombatPanel from "./components/CombatPanel.svelte";
</script>

<main class="flex h-screen w-screen bg-zinc-900 text-white">
    <div class="flex flex-col">
        <NamePlate />
        <StatLine />
        <CombatPanel />
    </div>
</main>
