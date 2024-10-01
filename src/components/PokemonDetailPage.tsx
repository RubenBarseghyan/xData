import {
  Box,
  Text,
  Tag,
  TagLabel,
  Divider,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { PokemonDetail } from "@/interfaces/pokemon";

interface PokemonDetailsProps {
  pokemon: PokemonDetail;
}

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Text fontSize="3xl" fontWeight="bold" textTransform="capitalize">
        {pokemon.name}
      </Text>
      <Box boxSize="150px" mx="auto">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          boxSize="100%"
          objectFit="contain"
        />
      </Box>

      <Divider my={4} />

      <Text fontWeight="bold" fontSize="xl">
        Stats:
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {pokemon.stats.map((stat) => (
          <GridItem key={stat.stat.name}>
            <Text textTransform="capitalize">
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </Text>
          </GridItem>
        ))}
      </Grid>

      <Divider my={4} />

      <Text fontWeight="bold">Types:</Text>
      <Box>
        {pokemon.types.map((type) => (
          <Tag key={type.type.name} size="lg" colorScheme="teal" m={1}>
            <TagLabel textTransform="capitalize">{type.type.name}</TagLabel>
          </Tag>
        ))}
      </Box>
    </Box>
  );
}
