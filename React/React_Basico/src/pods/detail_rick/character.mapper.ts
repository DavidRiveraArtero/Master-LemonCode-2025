import {ApiModelCharacter} from "./api"
import {VMCharacter} from "./vm"

export const CharacterMapperAMtoVM = (character:ApiModelCharacter):VMCharacter => (
    {
        name:character.name,
        imageCharacter:character.image,
        species:character.species,
        status:character.status
    }
)