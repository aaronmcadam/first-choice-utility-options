import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { useLayout } from "../hooks/useLayout";
import { FirstChoice } from "./logos/first-choice";
import { PlayIcon } from "./play-icon";

export function Hero() {
  const { isMobile, isDesktop } = useLayout();

  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6 }}>
      <Flex justify="space-between">
        <FirstChoice h={{ base: 6, sm: 8 }} />
        {isDesktop ? (
          <Button as="a" href="tel:00353872470718">
            Call us
          </Button>
        ) : null}
      </Flex>
      {isMobile ? (
        <Stack spacing={12} mt={8}>
          <Stack align="flex-start" spacing={5}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "6xl" }}
              fontWeight="extrabold"
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
              color="purple.900"
              mt="5"
              fontSize={{ base: "md", sm: "xl" }}
              maxW="2xl"
            >
              We ensure you get the best deal by keeping on top of the
              ever-changing tariffs from all the energy providers in Ireland.
            </Text>
            <Button
              as="a"
              href="tel:00353872470718"
              variant="primary"
              size="lg"
              w={{ base: "full", sm: "auto" }}
            >
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
      ) : (
        <SimpleGrid columns={12} spacing={8} mt={32}>
          <Stack gridColumn="span 6" align="flex-start" spacing={5}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "6xl" }}
              fontWeight="extrabold"
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
              color="purple.900"
              mt="5"
              fontSize={{ base: "md", sm: "xl" }}
              maxW="2xl"
            >
              We ensure you get the best deal by keeping on top of the
              ever-changing tariffs from all the energy providers in Ireland.
            </Text>
            <Button
              as="a"
              href="tel:00353872470718"
              variant="primary"
              size="lg"
              w={{ base: "full", sm: "auto" }}
            >
              Call us
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
      )}
    </Box>
  );
}
