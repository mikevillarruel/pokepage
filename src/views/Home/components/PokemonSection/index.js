import { useContext, useEffect } from "react";
import Loading from "../../../../components/Loading";
import PokemonContext from "../../../../context/pokemon/PokemonContext";
import PokemonCard from "../PokemonCard";
import './style.css'

export default function PokemonSection() {
    const { pokemonList, getPokemonList, isLoading } = useContext(PokemonContext);

    useEffect(() => {
        getPokemonList().catch(null);
    }, [])

    console.log(pokemonList)

    if (isLoading) {
        return <Loading message="Cargando ..." />
    }

    return (
        <div className="poke-section">
            {pokemonList.map((pokemon, index) => <PokemonCard key={index} {...pokemon} />)}
        </div>
    )

}