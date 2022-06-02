import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(pokemonUrl)
    .then((res) => setPokemon(res.data));
  }, [pokemonUrl]);

  

  return (
    <div className="pokemoncard2">
      <div onClick={() => navigate(`/pokemons/${pokemon.name}`)}>
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites?.front_default} alt="" className=" w-100" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;



