"use client";

import * as React from "react";
import { WagmiProvider } from "wagmi";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "../wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <ChakraProvider
      theme={extendTheme({
        initialColorMode: "light",
        useSystemColorMode: true,
        styles: {
          global: () => ({
            html: {
              overflowX: "hidden",
            },
            body: {
              overflowX: "hidden",
              // backgroundImage: "url(https://pbs.twimg.com/media/F6J9eSNXwAAW0hL?format=jpg&name=large)"
            },
          }),
        },
      })}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {mounted && children}
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );
}
