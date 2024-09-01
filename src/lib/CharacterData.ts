import { writable, type Writable } from "svelte/store";

interface SpellList {
    level: string,
    spells: {name: string, description: string}[]
}

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

    // Spells
    spells: SpellList[]
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
    charisma: 1,

    // Spells
    spells: [
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
    ],
});