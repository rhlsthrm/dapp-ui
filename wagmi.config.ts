import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan, react, erc } from "@wagmi/cli/plugins";
import { goerli, mainnet } from "wagmi/chains";

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });
  return {
    out: "src/generated.ts",
    plugins: [
      erc({
        20: false,
        721: true,
      }),
      etherscan({
        apiKey: env.ETHERSCAN_API_KEY!,
        chainId: mainnet.id,
        contracts: [],
      }),
      react(),
    ],
  };
});
