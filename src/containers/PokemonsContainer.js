import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";


const gqlVariables = {
    limit: 2,
    offset: 1,
  };
  
  export const PokemonsContainer = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
      variables: gqlVariables,
    });
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    console.log('Response from server', data);
      
    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.count} pokemon={pokemon} />)}
        </div>
    )
  };
 

    