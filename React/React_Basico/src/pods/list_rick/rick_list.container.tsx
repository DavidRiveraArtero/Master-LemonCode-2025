import React, { useEffect, useState } from "react";
import { getCharacter } from "./api";
import { mapListCharacterTransform } from "./rick_list.mapper";
import { ListCharacter } from "./rick_list.vm";
import { RickList } from "./rick_list.component";


export const ListRickContainer:React.FC = () => {
    const [allCharacters, setAllCharacter] = useState<ListCharacter[]>([])
    const [characters, setCharacter] = useState<ListCharacter[]>([])

    const [characterSearch, setCharacterSearch] = React.useState("")

    useEffect(() => {
        getCharacter().then(mapListCharacterTransform).then(setAllCharacter)
    },[])

    useEffect(() => {

        if(characterSearch === ''){
            setCharacter(allCharacters)
        }else {
            setCharacter(allCharacters.filter((character) => character.name.toLowerCase().includes(characterSearch.toLowerCase())))
        }
        
    }, [characterSearch, allCharacters])



    return <RickList characters={characters} setCharacter={setCharacter} characterSearch={characterSearch} setCharacterSearch={setCharacterSearch}/>
}