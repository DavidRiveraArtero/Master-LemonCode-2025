import React, { PropsWithChildren } from "react";
import "./main.style.css"
import { Header } from "../common/components/header.component";
export const Main:React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header/>
            <main className="main-container">
                {children}
            </main>
        </>
    )
}