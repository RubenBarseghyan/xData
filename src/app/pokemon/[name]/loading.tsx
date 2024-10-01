import { Spinner, Box } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box textAlign="center" py={20}>
      <Spinner size="xl" />
      <p>Loading Pokemon details...</p>
    </Box>
  );
}
