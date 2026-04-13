import React from "react";
import { ListMember } from "./member_list.vm";
import { getMemberList } from "./api";
import { mapMembersEntityToVM } from "./member_list.mapper";
import { List } from "./member_list.component";
import "./member_list.style.css"
import { FilterMemberContext } from "@/common/filter.context";

export const ListContainer:React.FC = () => {

    const {org, setOrg} = React.useContext(FilterMemberContext)
    const [err, setError] = React.useState<string>()
    const [members, setMember] = React.useState<ListMember[]>([])
    const [isclick, setIsClick] = React.useState<boolean>(false)


    /*const mockup:ListMember[]  = [
        {
            "login": "antonio06",
            "id": 14540103,
            "avatarUrl": "https://avatars.githubusercontent.com/u/14540103?v=4",
            
        },
        {
            "login": "brauliodiez",
            "id": 1457912,
            "avatarUrl": "https://avatars.githubusercontent.com/u/1457912?v=4",
        },
    ]*/

        
    React.useEffect(() => {
        getMemberList(org.toLowerCase())
            .then(mapMembersEntityToVM)
            .then(setMember)
            .catch((err: Error) => {
                setError(err.message)
                setMember([])
            })
    },[isclick])

    return (
        <>
            <List members={members} 
                  org={org} 
                  setOrg={setOrg} 
                  setIsClick={setIsClick} 
                  isClick={isclick}
                  error={err}/> 
        </>
    )
}