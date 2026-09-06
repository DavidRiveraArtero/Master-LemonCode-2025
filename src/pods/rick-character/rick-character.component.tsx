import React, {FC} from "react";
import "./rick-character.component.scss"
import { Character } from "./api/rick-character.api-model";
interface Props {
    character: Character
}


export const RickCharacter:FC<Props> = ({character}) => {
    return (
        <>
            <div className="hola">
                <h2>HOLA {character.name}</h2> 
            </div>
        </>
   
        )
}

