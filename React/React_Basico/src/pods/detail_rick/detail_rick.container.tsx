import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacher } from "./api";
import { VMCharacter } from "./vm";
import { CharacterMapperAMtoVM } from "./character.mapper";
import { DetailRick } from "./detail_rick.component";

export const DetailRickContainer:React.FC = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState<VMCharacter>()

    useEffect(() => {
        getCharacher(id).then(CharacterMapperAMtoVM).then(setCharacter)
    }, [])

   
    return <DetailRick character={character}/>
}