<script lang="ts">
    import {character_data as data} from "@lib/CharacterData";
</script>

<section class="pane flex justify-center gap-x-1 p-1 align-middle">
    <div class="text-center">{$data.name}, {$data.race} {$data.class} {$data.level}</div>
</section>