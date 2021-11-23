import {
  Text,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  useColorModeValue as mode,
  Stack,
  SimpleGrid,
  Center,
  Icon,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { Logo } from "./logo";

export function Hero() {
  return (
    <Box maxW="6xl" mx="auto">
      <HStack justify="space-between">
        <Logo h={8} />
        <Button>Call us</Button>
      </HStack>
      <Stack align="flex-start" spacing={5} maxW="2xl">
        <Heading as="h1" size="3xl" fontWeight="extrabold">
          <Box as="span" color="purple.600">
            Save more than 25%
          </Box>{" "}
          off your electricity bill
        </Heading>
        <Text color="purple.900" mt="5" fontSize="xl">
          We ensure you get the best deal by keeping on top of the ever-changing
          tariffs from all the energy providers in Ireland.
        </Text>
        <Button variant="primary" size="lg">
          Call us
        </Button>
      </Stack>
    </Box>
  );
}
