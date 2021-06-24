import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function PokemonCard({ name, url, sprite }) {
    const [id] = useState(url.split('/')[6]);

    return (
        <div className="card">
            <h3>{name.toUpperCase()}</h3>
            <img src={sprite} alt=""></img>
            <button>
                <Link to={`/pokemon/${id}`}>
                    Details
                </Link>
            </button>
        </div>
    )
}