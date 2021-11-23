import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Logo } from "./logo";
import { PlayIcon } from "./play-icon";

export function Hero() {
  return (
    <Box maxW="6xl" mx="auto" px={6}>
      <HStack justify="space-between">
        <Logo h={8} />
        <Button>Call us</Button>
      </HStack>
      <HStack mt={16}>
        <Stack align="flex-start" spacing={5} maxW="2xl">
          <Heading as="h1" size="3xl" fontWeight="extrabold">
            <Box as="span" color="purple.600">
              Save more than 25%
            </Box>{" "}
            off your electricity bill
          </Heading>
          <Text color="purple.900" mt="5" fontSize="xl">
            We ensure you get the best deal by keeping on top of the
            ever-changing tariffs from all the energy providers in Ireland.
          </Text>
          <Button variant="primary" size="lg">
            Call us
          </Button>
        </Stack>
        <Box pos="relative" overflow="hidden" rounded="lg" shadow="lg">
          <chakra.button
            as="a"
            href="https://youtu.be/UmzX6VxRshw"
            target="_blank"
            rel="noopener noreferrer"
            pos="relative"
            display="block"
          >
            <VisuallyHidden>Watch our video to learn more</VisuallyHidden>
            <Image
              alt="Watch our video to learn more"
              src="/video-thumbnail.png"
              w="full"
            />
            <Flex
              aria-hidden="true"
              align="center"
              justify="center"
              pos="absolute"
              top={0}
              right={0}
              bottom={0}
              left={0}
              w="full"
              h="full"
            >
              <PlayIcon color="purple.500" boxSize={20} />
            </Flex>
          </chakra.button>
        </Box>
      </HStack>
    </Box>
  );
}
