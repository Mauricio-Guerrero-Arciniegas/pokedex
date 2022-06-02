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
          <img
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt=""
            className="pokemonimg"
          />
          <div className="title">
          <h3>{pokemon.name}</h3>
          <h3>
            {pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}
          </h3>
          <p>Type</p>

          </div>
          <hr />

          <div className="properties">
            <div className="hp">
              <h4>{pokemon.stats?.[0].stat.name}</h4>
              <h4>{pokemon.stats?.[0].base_stat}</h4>
            </div>

            <div className="atack">
              <h4>{pokemon.stats?.[1].stat.name}</h4>
              <h4>{pokemon.stats?.[1].base_stat}</h4>
            </div>
          </div>
          <div className="properties2">

            <div className="defense">
              <h4>{pokemon.stats?.[2].stat.name}</h4>
              <h4>{pokemon.stats?.[2].base_stat}</h4>
            </div>

            <div className="speed">
              <h4>{pokemon.stats?.[5].stat.name}</h4>
              <h4>{pokemon.stats?.[5].base_stat}</h4>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default PokemonCard;



