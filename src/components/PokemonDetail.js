import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);

  const getColor = () => {

    if (pokemon.types?.[0]?.type.name === "grass") {
      return "#8dc891";
    }
    if (pokemon.types?.[0]?.type.name === "fire") {
      return "#eb7c60";
    }
    if (pokemon.types?.[0]?.type.name === "fighting") {
      return "brown";
    }
    if (pokemon.types?.[0]?.type.name === "flying") {
      return "#fc929e";
    }

    if (pokemon.types?.[0]?.type.name === "poison") {
      return "#c5a5c5";
    }
    if (pokemon.types?.[0]?.type.name === "ground") {
      return "#80775c";
    }
    if (pokemon.types?.[0]?.type.name === "bug") {
      return "#4AB648";
    }

    if (pokemon.types?.[0]?.type.name === "ghost") {
      return "#514875";
    }

    if (pokemon.types?.[0]?.type.name === "steel") {
      return "#5E736C";
    }

    if (pokemon.types?.[0]?.type.name === "water") {
      return "#1479FB";
    }

    if (pokemon.types?.[0]?.type.name === "electric") {
      return "#f8fd96";
    }

    if (pokemon.types?.[0]?.type.name === "psychic") {
      return "#ff9fef";
    }

    if (pokemon.types?.[0]?.type.name === "ice") {
      return "#b3effb";
    }
    if (pokemon.types?.[0]?.type.name === "dragon") {
      return "#fab779";
    }
    if (pokemon.types?.[0]?.type.name === "dark") {
      return "#63605d";
    }
    if (pokemon.types?.[0]?.type.name === "fairy") {
      return "#cb6aeb";
    }
    if (pokemon.types?.[0]?.type.name === "unknown") {
      return "#d1cad3";
    }
    if (pokemon.types?.[0]?.type.name === "shadow") {
      return "#575657";
    
    }}

  const getColorb = () => {

  if(pokemon.types?.[1]?.type.name === "grass"){
    return "#8dc891"
  }
  if(pokemon.types?.[1]?.type.name === "fire"){
    return "#eb7c60"
  }
  if(pokemon.types?.[1]?.type.name === "fighting"){
    return "brown"
  }
  if(pokemon.types?.[1]?.type.name === "flying"){
    return "#fc929e"
  }

  if(pokemon.types?.[1]?.type.name === "poison"){
    return "#c5a5c5"
  }
    if(pokemon.types?.[1]?.type.name === "ground"){
      return "#80775c"
  }
  if(pokemon.types?.[1]?.type.name === "bug"){
    return " #7ba4a8"
 }

 if(pokemon.types?.[1]?.type.name === "ghost"){
  return "#514875"
 }

 if(pokemon.types?.[1]?.type.name === "steel"){
return "#5E736C"
}

if(pokemon.types?.[1]?.type.name === "water"){
return "#9ee3f8"
 }

if(pokemon.types?.[1]?.type.name === "electric"){
return "#f8fd96"
}

  if(pokemon.types?.[1]?.type.name === "psychic"){
 return "#ff9fef"
  }
if(pokemon.types?.[1]?.type.name === "ice"){
return "#b3effb"
 }
if(pokemon.types?.[1]?.type.name === "dragon"){
return "#fab779"
 }
if(pokemon.types?.[1]?.type.name === "dark"){
return "#63605d"
 }
if(pokemon.types?.[1]?.type.name === "fairy"){
return "#cb6aeb"
}
if(pokemon.types?.[1]?.type.name === "unknown"){
return "#d1cad3"
}
if(pokemon.types?.[1]?.type.name === "shadow"){
return "#575657"
 }

};

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
        <div style={{ backgroundColor: getColor() }} className="gradient"></div>
        <div className="detailimg">
          <img
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt=""
            className="pokemonimg"
          />
        </div>

        <div className="initial">
          <h3>#{pokemon.id}</h3>

          <h1  className="name">{pokemon.name}</h1>

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
            <div style={{ backgroundColor: getColor()}} className="grass">
              <h2>{pokemon.types?.[0]?.type.name} </h2>
            </div>
            <div  style={{backgroundColor: getColorb()}} className="poison">
              <h2>{pokemon.types?.[1]?.type.name} </h2>
            </div>
            <div className="overgrow">
              <h2>{pokemon.abilities?.[0]?.ability.name} </h2>
            </div>
            <div className="chlorophyll">
              <h2>{pokemon.abilities?.[1]?.ability.name} </h2>
            </div>
          </div>

          <div className="ability"></div>

          <div className="stats">
            Stats
            <h3 className="prog1">
              {pokemon.stats?.[0].stat.name} :{" "}
              <ProgressBar
                animated
                variant="warning"
                now={pokemon.stats?.[0].base_stat}
              />
            </h3>
            <h3 className="prog2">
              {pokemon.stats?.[1].stat.name} :{" "}
              <ProgressBar
                animated
                variant="warning"
                now={pokemon.stats?.[1].base_stat}
              />
            </h3>
            <h3 className="prog3">
              {pokemon.stats?.[2].stat.name} :{" "}
              <ProgressBar
                animated
                variant="warning"
                now={pokemon.stats?.[2].base_stat}
              />
            </h3>
            <h3 className="prog4">
              {pokemon.stats?.[5].stat.name} :{" "}
              <ProgressBar
                animated
                variant="warning"
                now={pokemon.stats?.[5].base_stat}
              />
            </h3>
          </div>
        </div>
      </div>

      <div className="move">Movements</div>
      <div className="movements">
      
      <div className="one">
        <h5>{pokemon.moves?.[0]?.move.name}</h5>
      </div>
      <div className="two">
        <h5>{pokemon.moves?.[1]?.move.name}</h5>
      </div>
      <div className="three">
        <h5>{pokemon.moves?.[2].move.name}</h5>
      </div>
      <div className="four">
        <h5>{pokemon.moves?.[3].move.name}</h5>
      </div>
      <div className="five">
        <h5>{pokemon.moves?.[4].move.name}</h5>
      </div>
      <div className="six">
        <h5>{pokemon.moves?.[5].move.name}</h5>
      </div>
      <div className="seven">
        <h5>{pokemon.moves?.[6].move.name}</h5>
      </div>
      <div className="eight">
        <h5>{pokemon.moves?.[7].move.name}</h5>
      </div>
      <div className="nine">
        <h5>{pokemon.moves?.[8].move.name}</h5>
      </div>
      <div className="ten">
        <h5>{pokemon.moves?.[9].move.name}</h5>
      </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
