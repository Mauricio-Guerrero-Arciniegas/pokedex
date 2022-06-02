
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, []);

  return (
    <div>
      <img
        className="pokedeximg-2"
        src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
        alt=""
        width="200px"
      />
      <h1 className="rectangle2-red"></h1>
      <h1 className="rectangle2-black"></h1>
      
      <div className="detailcard">
      <img src={pokemon.sprites?.other["official-artwork"].front_default}alt=""
            className="pokemonimg"/>
      <h1>{pokemon.name}</h1>

      </div>
    </div>
  );
};

export default PokemonDetail;

