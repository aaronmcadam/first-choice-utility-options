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
    <Box mx="auto" px={{ base: 4, sm: 6 }}>
      <HStack justify="space-between">
        <Logo h={8} />
        <Button
          as="a"
          href="tel:00353872470718"
          display={{ base: "none", sm: "unset" }}
        >
          Call us
        </Button>
      </HStack>
      <Stack
        spacing={{ base: 12, sm: 2 }}
        direction={{ base: "column", sm: "row" }}
        mt={{ base: 8, sm: 16 }}
      >
        <Stack align={{ base: "center", sm: "flex-start" }} spacing={5}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "6xl" }}
            fontWeight="extrabold"
            textAlign={{ base: "center", sm: "left" }}
          >
            <Box
              as="mark"
              bgGradient="linear(to-r, #FC19AD, #7F23F7, #14AFFC)"
              bgClip="text"
              display="block"
            >
              Save more than 25%
            </Box>{" "}
            off your electricity bill
          </Heading>
          <Text
            color="purple.900"
            mt="5"
            fontSize={{ base: "md", sm: "xl" }}
            textAlign={{ base: "center", sm: "left" }}
          >
            We ensure you get the best deal by keeping on top of the
            ever-changing tariffs from all the energy providers in Ireland.
          </Text>
          <Button as="a" href="tel:00353872470718" variant="primary" size="lg">
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
      </Stack>
    </Box>
  );
}
