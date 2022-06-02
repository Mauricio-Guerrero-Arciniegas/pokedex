import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);

  return (
    <div className="general">
      <img
        className="pokedeximg-2"
        src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
        alt=""
        width="200px"
      />
      <div className="rectangle2-red"></div>
      <div className="rectangle2-black"></div>

      <div className="detailcard">
        <div className="gradient"></div>
        <div className="detailimg">
        <img
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt=""
          className="pokemonimg"
        />
        </div>

        <div className="initial">
          <h3>#{pokemon.id}</h3>

          <h1 className="name">{pokemon.name}</h1>

          <div className="weight-height">
            <div>
              <p>Weight</p>
              <h3>{pokemon.weight}</h3>
            </div>
            <div>
              <p>Height</p>
              <h3>{pokemon.weight}</h3>
            </div>
          </div>
        </div>

        <div className="text">
          <h5>Type</h5>
          <h5>Abilities</h5>
        </div>
        <div className="habilities">
          <div className="type-abilities">
            <div className="grass">
              <h2>{pokemon.types?.[0]?.type.name} </h2>
            </div>
            <div className="poison">
              <h2>{pokemon.types?.[1]?.type.name} </h2>
            </div>
            <div className="overgrow">
              <h2>{pokemon.abilities?.[0].ability.name} </h2>
            </div>
            <div className="chlorophyll">
              <h2>{pokemon.abilities?.[1].ability.name} </h2>
            </div>
          </div>

          <div className="ability"></div>

          <div className="stats">Stats
            <h3>
            {pokemon.stats?.[0].stat.name} :  <ProgressBar now={pokemon.stats?.[0].base_stat} />
            </h3>
            <h3>
              {pokemon.stats?.[1].stat.name} : <ProgressBar now={pokemon.stats?.[1].base_stat} />
            </h3>
            <h3>
              {pokemon.stats?.[2].stat.name} : <ProgressBar now={pokemon.stats?.[2].base_stat} />
            </h3>

            <h3>
              {pokemon.stats?.[5].stat.name} : <ProgressBar now={pokemon.stats?.[5].base_stat} />
            </h3>
          </div>
        </div>
      </div>
      <div className="one">
        <h3>{pokemon.moves?.[0]?.move.name}</h3>
      </div>
      <div className="two">
        <h3>{pokemon.moves?.[1]?.move.name}</h3>
      </div>
      <div className="three">
        <h3>{pokemon.moves?.[2].move.name}</h3>
      </div>
      <div className="four">
        <h3>{pokemon.moves?.[3].move.name}</h3>
      </div>
      <div className="five">
        <h3>{pokemon.moves?.[4].move.name}</h3>
      </div>
      <div className="six">
        <h3>{pokemon.moves?.[5].move.name}</h3>
      </div>
      <div className="seven">
        <h3>{pokemon.moves?.[6].move.name}</h3>
      </div>
      <div className="eight">
        <h3>{pokemon.moves?.[7].move.name}</h3>
      </div>
      <div className="nine">
        <h3>{pokemon.moves?.[8].move.name}</h3>
      </div>
      <div className="ten">
        <h3>{pokemon.moves?.[9].move.name}</h3>
      </div>
    </div>
  );
};

export default PokemonDetail;
