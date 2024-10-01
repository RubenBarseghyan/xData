import { PokemonListResponse, PokemonDetail } from "@/interfaces/pokemon";

export async function fetchPokemonList(
  limit: number,
  offset: number,
): Promise<PokemonListResponse> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  if (!res.ok) throw new Error("Failed to fetch Pokémon");
  return res.json();
}

export async function fetchPokemon(name: string): Promise<PokemonDetail> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon details");
  return res.json();
}
