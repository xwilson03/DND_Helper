<script>
    import NamePlate from "./lib/NamePlate.svelte";
    import StatLine from "./lib/stats/StatLine.svelte";
    import CombatPanel from "./lib/CombatPanel.svelte";
</script>

<main class="flex h-screen w-screen bg-zinc-900 text-white">
    <div class="flex flex-col">
        <NamePlate />
        <StatLine />
        <CombatPanel />
    </div>
</main>
