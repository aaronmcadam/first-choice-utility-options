import { Center, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { BordGais } from "./providers/bord-gais";

export function Providers() {
  return (
    <Stack align="center" spacing={6} py={16} maxW="6xl" mx="auto">
      <Heading
        as="h4"
        color="gray.600"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        We work with the best Irish energy providers
      </Heading>
      <SimpleGrid columns={4} spacing={1} w="full">
        <Center p={8}>
          <BordGais color="gray.400" h={20} />
        </Center>
        <Center p={8}>
          <BordGais color="gray.400" h={20} />
        </Center>
        <Center p={8}>
          <BordGais color="gray.400" h={20} />
        </Center>
        <Center p={8}>
          <BordGais color="gray.400" h={20} />
        </Center>
      </SimpleGrid>
    </Stack>
  );
}
