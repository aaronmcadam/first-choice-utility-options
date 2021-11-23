import {
  Avatar,
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./logo";

export function Testimonials() {
  return (
    <Box bg="purple.50">
      <SimpleGrid columns={2} mt={10} px={6} maxW="6xl" mx="auto">
        <Flex
          direction="column"
          py={16}
          pr={10}
          borderRightWidth="1px"
          borderRightColor="purple.200"
        >
          <Box flexShrink={0}>
            <Logo h={6} />
          </Box>
          <Flex as="blockquote" direction="column" mt={6}>
            <Text fontSize="lg" fontWeight="medium" color="purple.900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.
            </Text>
            <Box as="footer" mt={8}>
              <HStack spacing={4}>
                <Avatar
                  showBorder={true}
                  borderColor="purple.900"
                  size="md"
                  src="/danny.png"
                />
                <Stack spacing={0}>
                  <Text fontWeight="medium" color="purple.900">
                    Daniel McAdam
                  </Text>
                  <Text fontWeight="medium" color="purple.600">
                    CEO, First Choice Utility Options
                  </Text>
                </Stack>
              </HStack>
            </Box>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          py={16}
          pl={10}
          borderLeftWidth="1px"
          borderLeftColor="purple.200"
        >
          <Box flexShrink={0}>
            <Logo h={6} />
          </Box>
          <Flex as="blockquote" direction="column" mt={6}>
            <Text fontSize="lg" fontWeight="medium" color="purple.900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.
            </Text>
            <Box as="footer" mt={8}>
              <HStack spacing={4}>
                <Avatar
                  showBorder={true}
                  borderColor="purple.900"
                  size="md"
                  src="/danny.png"
                />
                <Stack spacing={0}>
                  <Text fontWeight="medium" color="purple.900">
                    Daniel McAdam
                  </Text>
                  <Text fontWeight="medium" color="purple.600">
                    CEO, First Choice Utility Options
                  </Text>
                </Stack>
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
