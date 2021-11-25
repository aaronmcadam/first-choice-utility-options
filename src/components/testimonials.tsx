import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FirstChoice } from "./logos/first-choice";
import { BreffniAir } from "./logos/breffni-air";
import { QuotesIcon } from "./quotes-icon";
import { Profitwatch } from "./logos/profitwatch";

export function Testimonials() {
  return (
    <Box bg="purple.50">
      <SimpleGrid columns={{ base: 1, sm: 2 }} mt={10} maxW="7xl" mx="auto">
        <Flex
          direction="column"
          px={{ base: 4, sm: 6 }}
          py={{ base: 12, md: 16 }}
          pr={{ md: 10, lg: 16 }}
          borderColor="purple.200"
          borderRightWidth={{ base: 0, sm: "1px" }}
          borderBottomWidth={{ base: "1px", sm: 0 }}
        >
          <Box flexShrink={0}>
            <BreffniAir h={12} />
          </Box>
          <Box pos="relative" mt={6}>
            <QuotesIcon
              boxSize={8}
              pos="absolute"
              transform="auto"
              translateX={-3}
              translateY={-2}
              color="purple.200"
              opacity={0.5}
              stroke="none"
              fill="currentColor"
            />
            <Box as="blockquote" pos="relative">
              <Text fontSize="lg" fontWeight="medium" color="purple.900">
                Breffni Air have had the pleasure of working with Danny McAdam
                over the past number of years bringing the company big savings
                on all our utility costs.
              </Text>
              <Box as="footer" mt={8}>
                <HStack spacing={4}>
                  <Avatar
                    showBorder={true}
                    borderColor="purple.900"
                    size="md"
                    src="/anne-marie-mcphilips.png"
                  />
                  <Stack spacing={0}>
                    <Text fontWeight="medium" color="purple.900">
                      Anne Marie McPhilips
                    </Text>
                    <Text fontWeight="medium" color="purple.600">
                      Financial Controller, Breffni Air
                    </Text>
                  </Stack>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Flex
          direction="column"
          px={{ base: 4, sm: 6 }}
          py={{ base: 12, md: 16 }}
          pl={{ md: 10, lg: 16 }}
          borderColor="purple.200"
          borderLeftWidth={{ base: 0, sm: "1px" }}
          borderTopWidth={{ base: "1px", sm: 0 }}
        >
          <Box flexShrink={0}>
            <Profitwatch h={12} />
          </Box>
          <Box pos="relative" mt={6}>
            <QuotesIcon
              boxSize={8}
              pos="absolute"
              transform="auto"
              translateX={-3}
              translateY={-2}
              color="purple.200"
              opacity={0.5}
              stroke="none"
              fill="currentColor"
            />
            <Box as="blockquote" pos="relative">
              <Text fontSize="lg" fontWeight="medium" color="purple.900">
                First Choice Utility Options are a hidden gem in the utility
                market. Their attention to detail, support and customer service
                are outstanding. The best deal is always passed to the customer.
              </Text>
              <Box as="footer" mt={8}>
                <HStack spacing={4}>
                  <Avatar
                    showBorder={true}
                    borderColor="purple.900"
                    size="md"
                    src="/oli-gleeson.png"
                  />
                  <Stack spacing={0}>
                    <Text fontWeight="medium" color="purple.900">
                      Oli Gleeson
                    </Text>
                    <Text fontWeight="medium" color="purple.600">
                      CEO, Profitwatch.ie
                    </Text>
                  </Stack>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
