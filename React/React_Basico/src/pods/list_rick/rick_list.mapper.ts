import * as VM from "./rick_list.vm"
import * as AM from "./api"

export const mapCharacterAmToVM = (character:AM.ListCharacter):VM.ListCharacter => ({
    id: character.id,
    avatarUrl: character.image,
    name: character.name,
    origin: character.origin.name,
    species: character.species,
    status:character.status
})

export const mapListCharacterTransform = (characters:AM.ListCharacter[]):VM.ListCharacter[] => 
    characters.map((character) => mapCharacterAmToVM(character)) 