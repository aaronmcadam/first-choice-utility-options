import { HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export function Banner() {
  return (
    <Stack
      spacing={{ base: 0, sm: 2 }}
      align="flex-start"
      direction={{ base: "column", sm: "row" }}
      justify="center"
      bg="purple.600"
      px={6}
      py={3}
    >
      <Text fontWeight="medium" color="white">
        Proud sponsors of Clones Film Festival
      </Text>
      <Link
        href="https://www.clonesfilmfestival.com/"
        target="_blank"
        rel="noopener noreferrer"
        color="white"
        fontSize="md"
        fontWeight="bold"
        borderBottomWidth="2px"
        borderBottomColor="transparent"
        _hover={{
          textDecoration: "none",
          borderBottomColor: "white",
        }}
      >
        <HStack spacing={1}>
          <Text>Learn more</Text>
          <Icon as={HiArrowRight} boxSize={5} />
        </HStack>
      </Link>
    </Stack>
  );
}
