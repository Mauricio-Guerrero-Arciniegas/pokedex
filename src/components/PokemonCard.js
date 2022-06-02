import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, [pokemonUrl]);

  const getColor = () => {
    if(pokemon.types?.[0].type.name === "grass"){
      return "#8dc891"
    }
    if(pokemon.types?.[0].type.name === "fire"){
      return "#eb7c60"
    }
    if(pokemon.types?.[0].type.name === "fighting"){
      return "brown"
    }
    if(pokemon.types?.[0].type.name === "flying"){
      return "#fc929e"
    }
    if(pokemon.types?.[0].type.name === "flying"){
      return "#fc929e"
    }

    if(pokemon.types?.[0].type.name === "poison"){
      return "#c5a5c5"
    }
      if(pokemon.types?.[0].type.name === "ground"){
        return "#80775c"
    }
    if(pokemon.types?.[0].type.name === "bug"){
      return " #7ba4a8"
   }

   if(pokemon.types?.[0].type.name === "ghost"){
    return "#514875"
   }

   if(pokemon.types?.[0].type.name === "steel"){
  return "white"
  }

  if(pokemon.types?.[0].type.name === "water"){
  return "#9ee3f8"
   }

  if(pokemon.types?.[0].type.name === "electric"){
  return "#f8fd96"
  }

    if(pokemon.types?.[0].type.name === "psychic"){
   return "#ff9fef"
    }
  if(pokemon.types?.[0].type.name === "ice"){
  return "#b3effb"
   }
  if(pokemon.types?.[0].type.name === "dragon"){
  return "#fab779"
   }
  if(pokemon.types?.[0].type.name === "dark"){
  return "#63605d"
   }
  if(pokemon.types?.[0].type.name === "fairy"){
  return "#cb6aeb"
  }
  if(pokemon.types?.[0].type.name === "unknown"){
  return "#d1cad3"
  }
  if(pokemon.types?.[0].type.name === "shadow"){
  return "#575657"
   }

  }

  return (
    <div  style={{backgroundColor: getColor()}} className="pokemoncard">
      <div  style={{backgroundColor: "white"}}
        className="card"
        onClick={() => navigate(`/pokemons/${pokemon.name}`)}
      >
        <li>
          <img style={{backgroundColor: getColor()}} 
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt=""
            className="pokemonimg"
          />
          <div className="title">
          <h3>{pokemon.name}</h3>
          <p>Type</p>
          <h3>
            {pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}
          </h3>

          </div>

          <div className="hr">
          <hr  />
          </div>


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



