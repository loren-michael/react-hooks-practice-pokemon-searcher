import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [front, setFront] = useState(true)
  // console.log(pokemon)

  function handleFront() {
    setFront(!front)
  }

  return (
    <Card>
      <div onClick={handleFront} >
        <div className="image">
          <img src={front ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
