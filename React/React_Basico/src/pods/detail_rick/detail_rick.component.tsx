import React from "react";
import {VMCharacter} from "./vm"
import { Main } from "@/layouts/main.layout";
import "./character.style.css";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/core/router/routes";

interface Props {
    character: VMCharacter
}

export const DetailRick: React.FC<Props> = ({character}) => {
    return <Main>
                <Link to={switchRoutes.list_rick}>Return</Link>
                <article className="card_container">
                    <img src={character?.imageCharacter} alt={character?.name}/>
                    <div className="card_container_info">
                        <div className="card_container_info_p">
                            <p>Name:</p>
                            <p>{character?.name}</p>
                        </div>
                        <div className="card_container_info_p">
                            <p>Specie:</p>
                            <p>{character?.species}</p>
                        </div>
                        <div className="card_container_info_status">
                            <h3>{character?.status.toUpperCase()}</h3>
                            <p>{character?.status.toLowerCase() === "alive" ? "🟢" : "🔴" }</p>
                        </div>
                    </div>
                </article>
           </Main>
}