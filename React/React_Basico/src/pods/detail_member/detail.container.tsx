import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getMember } from "./api";
import * as vm from "./member.vm"
import { mapMemberEntityAMToVM } from "./member.mapper";
import { DetailMember } from "./detail.component";




export const DetailConainer: React.FC = () => {
    const {name} = useParams() // GET ID URL 
    const [member, setMember] = useState<vm.Member>()
    React.useEffect(() => {
        getMember(name).then(mapMemberEntityAMToVM).then(setMember)
    }, [name])


    return <DetailMember member={member}/>
}