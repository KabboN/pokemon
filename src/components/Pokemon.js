import React from "react";

export function Pokemon({ pokemon }) { 
    
    return (
        <div className="pokemon">
            <div className="pokemon_count">
                <p>{pokemon.count}</p>
            </div> 
            <div className="pokemon_N_P">
                <span>{pokemon.next}</span>
                <span>{pokemon.previous}</span>
            </div> 
            <div className="pokemon_status">
                <p>{pokemon.status}</p>
            </div>     
            <div className="pokemon_image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>    

         </div>   
    )

}