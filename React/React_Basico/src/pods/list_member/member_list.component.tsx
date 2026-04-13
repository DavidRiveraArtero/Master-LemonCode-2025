import { memo } from "react"
import { TableMembers } from "@/common/components"
import { Form } from "@/common/components/form.component"
import { ListMember } from "./member_list.vm"
import { switchRoutes } from "@/core/router/routes";
import { SectionListLayout } from "@/layouts/section_list.layout";

interface Props {
    members: ListMember[],
    org: string,
    setOrg:React.Dispatch<React.SetStateAction<string>>
    isClick:boolean,
    setIsClick: React.Dispatch<React.SetStateAction<boolean>>
    error: string
}

export const List:React.FC<Props> = memo(({members, org, setOrg, isClick, setIsClick, error}) => {

    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        e.preventDefault()
        setIsClick(!isClick)
    }

    return <SectionListLayout>
                <div className="member_list_container">
                <Form value={org} setValue={setOrg} handleClick={handleClick}/>
                {
                    members.length !==0 ? 
                        <TableMembers list={members} path={switchRoutes.details_member}/> 
                        :
                        error 
                }
                </div>
            </SectionListLayout>

    
})