import { Suspense } from "react";
import PokemonListClient from "./PokemonListClient";
import { fetchPokemonList } from "@/utils/pokemonApi";

export default async function PokemonListServer() {
  const pokemonList = await fetchPokemonList(20, 0);

  return (
    <Suspense fallback={<div>Loading Pokémon...</div>}>
      <PokemonListClient initialPokemons={pokemonList.results} />
    </Suspense>
  );
}
