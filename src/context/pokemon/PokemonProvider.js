import { useState } from "react";
import PokemonContext from "./PokemonContext";
import apiCall from '../../api'

export default function PokemonProvider({ children }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const getPokemonList = async () => {
        setIsLoading(true);
        try {
            const pokemonListResult = await apiCall({
                url: 'https://pokeapi.co/api/v2/pokemon?limit=100'
            });

            for(let element of pokemonListResult.results){
                let pokemonDetailResult = await apiCall({
                    url: `https://pokeapi.co/api/v2/pokemon/${element.url.split('/')[6]}`
                });
                element.sprite = pokemonDetailResult?.sprites?.other?.dream_world?.front_default;
            }
            setPokemonList(pokemonListResult.results);
        } catch (error) {
            setPokemonList([]);
        } finally{
            setIsLoading(false);
        }
    }

    const getPokemonDetail = async (id) => {
        setIsLoading(true);
        try {
            const pokemonDetailResult = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            setPokemonDetail(pokemonDetailResult);
        } catch (error) {
            setPokemonDetail({})
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <PokemonContext.Provider value={{
            pokemonList,
            getPokemonList,
            pokemonDetail,
            getPokemonDetail,
            isLoading,
        }}>
            {children}
        </PokemonContext.Provider>
    );
}