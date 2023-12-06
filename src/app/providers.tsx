"use client";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { chains, config } from "../wagmi";

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
            },
          }),
        },
      })}
    >
      <WagmiConfig config={config}>
        <RainbowKitProvider
          chains={chains}
          coolMode
          showRecentTransactions={true}
          theme={darkTheme({
            accentColorForeground: "black",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
