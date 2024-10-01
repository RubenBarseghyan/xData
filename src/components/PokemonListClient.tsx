"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import {
  setSearchTerm,
  fetchMorePokemonsStart,
  fetchMorePokemonsSuccess,
  fetchMorePokemonsFailure,
} from "@/store/pokemonSlice";
import {
  Box,
  Button,
  Text,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import PokemonSearchForm from "./PokemonSearchForm";

interface PokemonListClientProps {
  initialPokemons: Array<{ name: string; url: string }>;
}

export default function PokemonListClient({
  initialPokemons,
}: PokemonListClientProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { searchTerm, pokemons, isLoading } = useSelector(
    (state: RootState) => state.pokemon,
  );
  const [offset, setOffset] = useState(initialPokemons.length);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (pokemons.length === 0 && initialPokemons.length > 0) {
      dispatch({
        type: "pokemon/setInitialPokemons",
        payload: initialPokemons,
      });
      setInitialLoading(false);
    } else {
      setInitialLoading(false);
    }
  }, [dispatch, initialPokemons, pokemons.length]);

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term));
  };

  const loadMore = async () => {
    dispatch(fetchMorePokemonsStart()); // Start loading
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,
      );
      const data = await res.json();
      dispatch(fetchMorePokemonsSuccess(data.results));
      setOffset((prev) => prev + 20);
    } catch (error) {
      dispatch(fetchMorePokemonsFailure());
      console.error("Error fetching more Pokemon:", error);
    }
  };

  const filteredPokemons = searchTerm
    ? pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : pokemons;

  if (initialLoading) {
    return (
      <Box textAlign="center" p={5}>
        <Spinner size="xl" />
        <Text>Loading Pokemon...</Text>
      </Box>
    );
  }

  return (
    <VStack spacing={5} align="stretch">
      <PokemonSearchForm onSearch={handleSearch} />

      {isLoading && <Spinner size="xl" />}

      {!isLoading && filteredPokemons.length === 0 && (
        <Box textAlign="center">
          <Text>No Pokémon found.</Text>
        </Box>
      )}

      {filteredPokemons.length > 0 && (
        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
          {filteredPokemons.map((pokemon, index) => (
            <Box
              key={`${pokemon.name}-${index}`}
              borderWidth="1px"
              borderRadius="lg"
              p={5}
            >
              <Text fontSize="lg" fontWeight="bold">
                {pokemon.name}
              </Text>
              <Link href={`/pokemon/${pokemon.name}`}>
                <Button colorScheme="teal" mt={3}>
                  View Details
                </Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      )}

      {!isLoading && (
        <Button onClick={loadMore} mt={4} colorScheme="teal">
          Load More Pokemon
        </Button>
      )}
    </VStack>
  );
}
