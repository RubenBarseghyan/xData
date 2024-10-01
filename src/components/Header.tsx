import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Box as="header" bg="teal.500" py={4} px={8}>
      <Heading as="h1" size="lg" color="white">
        <Link href="/">
          Pokemon Info
        </Link>
      </Heading>
    </Box>
  );
}
