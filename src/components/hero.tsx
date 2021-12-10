import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackProps,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { FirstChoice } from "./logos/first-choice";
import { PlayIcon } from "./play-icon";

function MobileLayout(stackProps: StackProps) {
  return (
    <Stack spacing={12} mt={16} {...stackProps}>
      <Stack align="flex-start" spacing={5}>
        <Heading
          as="h1"
          lineHeight={1}
          fontWeight="extrabold"
          fontSize="4xl"
          letterSpacing="tight"
        >
          <Box
            as="mark"
            bgGradient="linear(to-r, #FC19AD, #7F23F7, #14AFFC)"
            bgClip="text"
            display="block"
          >
            Save more than 25%
          </Box>{" "}
          off your energy bill
        </Heading>
        <Text color="gray.500" mt="5">
          Trust us to get you the best deal by helping you keep track of the
          constantly changing prices charged by Irish energy suppliers.
        </Text>
        <Button
          as="a"
          href="tel:00353872470718"
          variant="primary"
          size="lg"
          w="full"
        >
          Get a free quote
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
            h="full"
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
  );
}

function DesktopLayout(gridProps: SimpleGridProps) {
  return (
    <SimpleGrid
      columns={{ sm: 1, lg: 12 }}
      spacing={8}
      mt={{ sm: 16, lg: 32 }}
      {...gridProps}
    >
      <Stack
        align={{ sm: "center", lg: "flex-start" }}
        gridColumn="span 6"
        spacing={5}
        textAlign={{ sm: "center", lg: "left" }}
      >
        <Heading
          as="h1"
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight={1}
          fontSize={{ sm: "5xl", xl: "6xl" }}
        >
          <Box
            as="mark"
            bgGradient="linear(to-r, #FC19AD, #7F23F7, #14AFFC)"
            bgClip="text"
            display="block"
          >
            Save more than 25%
          </Box>{" "}
          off your energy bill
        </Heading>
        <Text
          color="gray.500"
          mt="5"
          fontSize={{ sm: "xl", lg: "lg", xl: "xl" }}
          maxW="xl"
        >
          Trust us to get you the best deal by helping you keep track of the
          constantly changing prices charged by Irish energy suppliers.
        </Text>
        <Button as="a" href="tel:00353872470718" variant="primary" size="lg">
          Get a free quote
        </Button>
      </Stack>
      <Flex gridColumn="span 6" align="center">
        <Box rounded="lg" shadow="lg" mx="auto" w="full" maxW="md">
          <chakra.button
            as="a"
            href="https://youtu.be/UmzX6VxRshw"
            target="_blank"
            rel="noopener noreferrer"
            pos="relative"
            display="block"
            rounded="lg"
            overflow="hidden"
          >
            <VisuallyHidden>Watch our video to learn more</VisuallyHidden>
            <Image
              alt="Watch our video to learn more"
              src="/video-thumbnail.png"
              w="full"
              h="full"
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
      </Flex>
    </SimpleGrid>
  );
}

export function Hero() {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6 }}>
      <Flex justify="space-between">
        <FirstChoice h={{ base: 6, sm: 8 }} />
        <Button
          as="a"
          href="tel:00353872470718"
          display={{ base: "none", sm: "inline" }}
        >
          Call us
        </Button>
      </Flex>
      <MobileLayout display={{ base: "flex", sm: "none" }} />
      <DesktopLayout display={{ base: "none", sm: "flex" }} />
    </Box>
  );
}
