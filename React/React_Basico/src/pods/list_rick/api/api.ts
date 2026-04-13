import { ListCharacter } from "./rick_list.model"
export const getCharacter = async():Promise<ListCharacter[]> => fetch("https://rickandmortyapi.com/api/character")
    .then(resp => resp.json()).then(data => data.results)