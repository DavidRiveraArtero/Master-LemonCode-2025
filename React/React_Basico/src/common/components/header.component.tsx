import "./header.style.css"
import { switchRoutes } from "@/core/router/routes";
import React from "react";
import { Link } from "react-router-dom";

export const Header:React.FC =() => {
    return (
        <header className="header_container">
            <h2 className="header_container_title">Modulo basico</h2>
            <div className="header_container_links">
                <Link to={switchRoutes.list_member}>Member Page</Link>
                <Link to={switchRoutes.list_rick}>Rick y Morty</Link>
            </div>
        </header>
    )
}