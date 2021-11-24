import {
  Center,
  CenterProps,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BordGais } from "./providers/bord-gais";

function Provider(props: CenterProps) {
  return (
    <Center p={6} bg="gray.50" {...props}>
      <BordGais color="gray.400" h={20} />
    </Center>
  );
}

export function Providers() {
  return (
    <Stack align="center" spacing={6} py={16} mx="auto" px={{ base: 4, sm: 6 }}>
      <Heading
        as="h4"
        color="gray.600"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
        textAlign="center"
      >
        We work with the best Irish energy providers
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 4 }}
        w="full"
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Provider borderRightWidth="1px" borderBottomWidth="1px" />
        <Provider borderLeftWidth="1px" borderBottomWidth="1px" />
        <Provider borderRightWidth="1px" borderTopWidth="1px" />
        <Provider borderLeftWidth="1px" borderTopWidth="1px" />
      </SimpleGrid>
    </Stack>
  );
}
