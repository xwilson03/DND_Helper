<script lang="ts">

    const allSpells = [
        { level: '1st', spells: [{name: "temp_spell_1", description: "temp_description_1"}] },
        { level: '2nd', spells: [{name: "temp_spell_2", description: "temp_description_2"}] },
        { level: '3rd', spells: [{name: "temp_spell_3", description: "temp_description_3"}] },
        { level: '4th', spells: [{name: "temp_spell_4", description: "temp_description_4"}] },
        { level: '5th', spells: [{name: "temp_spell_5", description: "temp_description_5"}] },
        { level: '6th', spells: [{name: "temp_spell_6", description: "temp_description_6"}] },
        { level: '7th', spells: [{name: "temp_spell_7", description: "temp_description_7"}] },
        { level: '8th', spells: [{name: "temp_spell_8", description: "temp_description_8"}] },
        { level: '9th', spells: [{name: "temp_spell_9", description: "temp_description_9"}] },
    ];
    
</script>

<section class="pane flex flex-col items-stretch gap-y-10 overflow-scroll">
    {#each allSpells as spellLevel}
        <table class="border-separate border-spacing-x-0.5 border-spacing-y-1 items-stretch">
            <th>{spellLevel.level} Level</th>

            {#each spellLevel.spells as spell}
                <tr class="rounded-lg border-l border-r border-zinc-800 bg-zinc-900 text-center">
                {spell.name}
                </tr>
            {/each}

        </table>
    {/each}
</section>