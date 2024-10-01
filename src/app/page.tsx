import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Heading, Box, Text } from "@chakra-ui/react";
import PokemonListServer from "@/components/PokemonListServer";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Pokemon List - Home",
  description: "Discover and explore a list of Pokemon ",
};

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/auth/login");
  }

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={5} color="teal.500">
        Welcome {session?.user?.name || "User"}!
      </Heading>

      <Text fontSize="lg" textAlign="center" mb={8}>
        Discover and explore your favorite Pokémon.
      </Text>
      <PokemonListServer />
    </Box>
  );
}
