import { ApiModelCharacter } from "./am";

export const getCharacher = async(id:string):Promise<ApiModelCharacter> => fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => data.json()).then((character) => character)