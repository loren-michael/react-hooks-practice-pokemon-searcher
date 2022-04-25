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

  function onSearchChange(str) {
    console.log(str)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} />
      <br />
      <PokemonCollection 
        pokemon={filteredPokemon} 
        setPokemon={setPokemon}
        search={search}
        setSearch={setSearch}
        onSearchChange={onSearchChange}
      />
    </Container>
  );
}

export default PokemonPage;
