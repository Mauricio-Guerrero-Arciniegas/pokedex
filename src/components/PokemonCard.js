import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, [pokemonUrl]);

  return (
    <div className="pokemoncard">
      <div
        className="card"
        onClick={() => navigate(`/pokemons/${pokemon.name}`)}
      >
        <li>
          <h3>{pokemon.name}</h3>
          
          <hr />

          <img
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt=""
            className="pokemonimg"
          />
        </li>
      </div>
    </div>
  );
};

export default PokemonCard;



