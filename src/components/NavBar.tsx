import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box h="40px">
      <Flex>
        <Box>
          <Heading size={"lg"}>
            <a href="">Home</a>
          </Heading>
        </Box>
        <Spacer />
        <Flex direction={"row"}>
          <IconButton
            mr={5}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          />
          <Box>
            <ConnectButton />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
