<script lang="ts">
    import {character_data as data} from "@/lib/CharacterData"
</script>

<section class="pane flex flex-col items-stretch gap-y-4 overflow-scroll">
    {#each $data.spells as spellLevel}
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