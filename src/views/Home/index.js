import PokemonSection from "./components/PokemonSection";
import PokemonWall from "./components/PokemonWall";

export default function Home() {
    return (
        <div>
            <PokemonWall/>
            <PokemonSection />
        </div>
    );
}