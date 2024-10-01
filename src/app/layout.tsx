import { Providers } from "../store/providers";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Providers>
            <Header />
            <Box as="main" p={4}>
              {children}
            </Box>
          </Providers>
        </ChakraProvider>
      </body>
    </html>
  );
}
