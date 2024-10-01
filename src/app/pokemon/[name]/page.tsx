import { fetchPokemon } from "@/utils/pokemonApi";
import { notFound } from "next/navigation";
import PokemonDetails from "@/components/PokemonDetailPage";
import { PokemonDetail } from "@/interfaces/pokemon";
import { Metadata } from "next";
import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

interface PokemonDetailPageProps {
  params: { name: string };
}

export async function generateMetadata({
  params,
}: PokemonDetailPageProps): Promise<Metadata> {
  const pokemon = await fetchPokemon(params.name);
  if (!pokemon) return {};

  return {
    title: `${pokemon.name} - Pokemon Details`,
    description: `Pokemon ${pokemon.name}.`,
  };
}

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  let pokemon: PokemonDetail | null = null;

  try {
    pokemon = await fetchPokemon(params.name);
  } catch {
    return notFound();
  }

  if (!pokemon) {
    return notFound();
  }
  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <PokemonDetails pokemon={pokemon} />
    </Suspense>
  );
}
