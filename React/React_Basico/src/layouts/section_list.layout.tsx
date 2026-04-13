import React, { PropsWithChildren } from "react";
import "./section_list.style.css"

export const SectionListLayout:React.FC<PropsWithChildren> = ({children}) => {
    return <section className="section_list">{children}</section>
}