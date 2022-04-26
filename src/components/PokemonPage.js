import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then(pokemon => setPokemon(pokemon))
  }, [])

  const filteredPokemon = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <br />
      <PokemonCollection 
        pokemon={filteredPokemon} 
        setPokemon={setPokemon}
      />
    </Container>
  );
}

export default PokemonPage;
