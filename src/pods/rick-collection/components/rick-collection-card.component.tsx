import React, {FC} from "react";
import { Result } from "../api";
import "./rick-collection-card.compoment.style.scss"

interface Props {
    character: Result
}

export const RickCollectionCard:FC<Props> = ({character}) => {
    
    return (
        <div className="card_collection">
            
            <img className="" src={character.image} alt={character.name} />
        
            <div className="card_collection_info">
                <div className="card_collection_info_header">
                    <div>
                        <h3>{character.name}</h3>
                        <span className={character.status === 'Alive' ? 'isAlive' : 'isNotAlive'}>
                            {character.status === 'Alive' ? '🟢' : '🔴' }
                        </span>
                    </div>
                    <p>{character.origin.name}</p>
                </div>
                <div>
                    <div>  
                        <p>{character.species}</p>
                    </div>
                    <p>{character.episode.length}</p>
                </div>
                <button>INFO</button>
           
            </div>
        </div>

    )
}