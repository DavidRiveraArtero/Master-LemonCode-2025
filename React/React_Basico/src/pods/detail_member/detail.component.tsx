import React from "react"
import { Member } from "./member.vm"
import { Link } from "react-router-dom"
import { switchRoutes } from "@/core/router/routes"
import { Card } from "./component/card.component"

interface Props {
    member:Member
}

export const DetailMember: React.FC<Props> = ({member}) => {
    return  <>
                <Link to={switchRoutes.root}>Return</Link>
                <Card member={member}/>
            </>
}