"use client";

import { useForm } from "react-hook-form";
import { Input, VStack, Button, HStack } from "@chakra-ui/react";

interface PokemonSearchFormProps {
  onSearch: (searchTerm: string) => void;
}

export default function PokemonSearchForm({
  onSearch,
}: PokemonSearchFormProps) {
  const { register, handleSubmit, reset, watch } = useForm<{
    searchTerm: string;
  }>();
  const searchTerm = watch("searchTerm") || "";

  const onSubmit = (data: { searchTerm: string }) => {
    onSearch(data.searchTerm);
  };

  const handleReset = () => {
    reset({ searchTerm: "" });
    onSearch("");
  };

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={4}
      align="stretch"
    >
      <HStack>
        <Input
          placeholder="Search Pokemon"
          {...register("searchTerm")}
          value={searchTerm}
        />
        <Button colorScheme="teal" type="submit">
          Search
        </Button>
        <Button colorScheme="gray" onClick={handleReset}>
          Reset
        </Button>
      </HStack>
    </VStack>
  );
}
