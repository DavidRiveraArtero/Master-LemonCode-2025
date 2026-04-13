import React from "react";
import { ListMember } from "@/pods/list_member/member_list.vm";
import "./table.style.css"
import { generatePath, Link } from "react-router-dom";
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow,  TableBody } from "@mui/material";
import { ListCharacter } from "@/pods/list_rick/rick_list.vm";


interface Props {
    list: ListMember[] | ListCharacter[],
    path: string
}

export const TableMembers: React.FC<Props> = ({list, path}) => {
    return <TableContainer sx={{width:'100%', minWidth:350, boxShadow:"2px 5px 15px 6px rgba(0, 0, 0, 0.76)"}} component={Paper}>
                <Table sx={{width:'100%', minWidth:350}} arial-laber="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {list.map((data, id) => {
                            return (
                                <TableRow key={data.id}>
                                    <TableCell align="center">{id}</TableCell>
                                    <TableCell align="center">
                                            <div className="table_info"><img loading="lazy" src={data.avatarUrl}/>{data.name}</div>
                                    </TableCell>
                                    <TableCell align="center"> <Link className="table-link" to={generatePath(path, { name: data.name, id:data.id })}>More Info</Link></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>   
}