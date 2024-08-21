import { writable, type Writable } from "svelte/store";

export interface CharacterData {
    // Metadata
    name: string
    race: string
    class: string
    level: number

    // Combat Data
    health: number
    temp_health: number
    max_health: number
    armor_class: number
    initiative: number
    speed: number

    // Stats
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
};

export const character_data: Writable<CharacterData> = writable({
    // Metadata
    name: "John Doe",
    race: "Human",
    class: "Bard",
    level: 1,

    // Combat Data
    health: 0,
    temp_health: 0,
    max_health: 0,
    armor_class: 0,
    initiative: 0,
    speed: 0,

    // Stats
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1
});