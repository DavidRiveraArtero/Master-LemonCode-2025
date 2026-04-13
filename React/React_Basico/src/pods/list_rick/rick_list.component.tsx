import React from "react";
import { ListCharacter } from "./rick_list.vm";
import { TableMembers } from "@/common/components";
import { switchRoutes } from "@/core/router/routes";
import { SectionListLayout } from "@/layouts/section_list.layout";
import { Form } from "@/common/components/form.component";
import "./rick_list.style.css"

interface Props {
    characters: ListCharacter[],
    setCharacter: React.Dispatch<React.SetStateAction<ListCharacter[]>>
    characterSearch: string,
    setCharacterSearch: React.Dispatch<React.SetStateAction<string>>
}

export const RickList:React.FC<Props> = ({characters, characterSearch, setCharacterSearch}) => {

    
       

    return  <SectionListLayout>
                <div className="rick_list_container">
                    <Form value={characterSearch} setValue={setCharacterSearch}/>
                    <TableMembers list={characters} path={switchRoutes.detail_rick}/>
                </div>
            </SectionListLayout>
}

