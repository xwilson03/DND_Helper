<script lang="ts">

    const allSpells = [
        { level: '1st', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
        
        { level: '2nd', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
        
        { level: '3rd', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
        
        { level: '4th', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
        
        { level: '5th', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
        
        { level: '6th', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
        
        { level: '7th', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
        
        { level: '8th', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
        
        { level: '9th', spells: [
            {name: "temp_spell_1", description: "temp_description_1"},
            {name: "temp_spell_2", description: "temp_description_2"},
            {name: "temp_spell_3", description: "temp_description_3"},
            {name: "temp_spell_4", description: "temp_description_4"},
        ]},
    ];
    
</script>

<section class="pane flex flex-col items-stretch gap-y-4 overflow-scroll">
    {#each allSpells as spellLevel}
        <table class="border-separate border-spacing-x-4 border-spacing-y-2 items-stretch">
            <th>{spellLevel.level} Level</th>

            {#each spellLevel.spells as spell}
                <tr> <td class="rounded-lg border-zinc-800 bg-zinc-900 text-center">
                    {spell.name}
                </td> </tr>
            {/each}

        </table>
    {/each}
</section>