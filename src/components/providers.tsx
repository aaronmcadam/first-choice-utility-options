import {
  Center,
  CenterProps,
  Heading,
  HTMLChakraProps,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Airtricity } from "./logos/airtricity";
import { BordGais } from "./logos/bord-gais";
import { ElectricIreland } from "./logos/electric-ireland";
import { Energia } from "./logos/energia";

interface ProviderProps {
  Logo: React.FC<HTMLChakraProps<"svg">>;
}

function Provider({ Logo }: ProviderProps) {
  return (
    <Center p={6}>
      <Logo color="gray.400" h={20} />
    </Center>
  );
}

export function Providers() {
  return (
    <Stack
      align="center"
      spacing={6}
      py={16}
      px={{ base: 4, sm: 6 }}
      maxW="7xl"
      mx="auto"
    >
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
      <SimpleGrid columns={{ base: 2, sm: 4 }} w="full">
        <Provider Logo={BordGais} />
        <Provider Logo={Energia} />
        <Provider Logo={ElectricIreland} />
        <Provider Logo={Airtricity} />
      </SimpleGrid>
    </Stack>
  );
}
