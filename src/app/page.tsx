"use client";

import {
  VStack,
  Box,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";

import { NavBar } from "../components/NavBar";

const Page = () => {
  return (
    <VStack
      spacing={4}
      align="stretch"
      p={4}
    >
      <NavBar />
      <Flex>
        <Spacer />
        <Box>
          <Center>{"<INIT DAPP/>"}</Center>
        </Box>
        <Spacer />
      </Flex>
      <Flex>
        <Spacer />
      </Flex>
    </VStack>
  );
};

export default Page;
