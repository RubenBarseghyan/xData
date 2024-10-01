import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  pokemons: Array<{ name: string; url: string }>;
  searchTerm: string;
  isLoading: boolean;
}

const initialState: PokemonState = {
  pokemons: [],
  searchTerm: "",
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setInitialPokemons: (
      state,
      action: PayloadAction<Array<{ name: string; url: string }>>,
    ) => {
      state.pokemons = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    fetchMorePokemonsStart: (state) => {
      state.isLoading = true;
    },
    fetchMorePokemonsSuccess: (
      state,
      action: PayloadAction<Array<{ name: string; url: string }>>,
    ) => {
      state.pokemons = [...state.pokemons, ...action.payload];
      state.isLoading = false;
    },
    fetchMorePokemonsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  setInitialPokemons,
  setSearchTerm,
  fetchMorePokemonsStart,
  fetchMorePokemonsSuccess,
  fetchMorePokemonsFailure,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
