import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  HiOutlineCalendar,
  HiOutlineCurrencyEuro,
  HiOutlineEmojiHappy,
  HiOutlineTrendingUp,
} from "react-icons/hi";

export function Features() {
  return (
    <Box py={16} mx="auto" px={{ base: 4, sm: 6 }}>
      <Flex direction="column" align={{ base: "flex-start", sm: "center" }}>
        <Heading
          as="h4"
          color="purple.600"
          fontSize="sm"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          We work for you
        </Heading>
        <Heading fontWeight="extrabold" mt={2}>
          We focus on you, not the provider
        </Heading>
        <Text
          align={{ base: "left", sm: "center" }}
          color="gray.500"
          fontSize="xl"
          mt={4}
        >
          We combine our industry knowledge and the leverage that comes from
          representing thousands of Irish businesses to get the best possible
          price for you.
        </Text>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        spacingX={8}
        spacingY={10}
        mt={10}
      >
        <HStack align="flex-start" spacing={4}>
          <Center
            boxSize={12}
            bg="purple.500"
            rounded="md"
            flexShrink={0}
            color="white"
          >
            <Icon as={HiOutlineTrendingUp} boxSize={6} />
          </Center>
          <Stack>
            <Heading as="h5" fontWeight="medium" fontSize="md">
              The latest prices
            </Heading>
            <Text color="gray.500">
              We’re constantly monitoring the latest changes in tariffs across
              Ireland—you’ll be the first to know when there’s a chance to save
              money.
            </Text>
          </Stack>
        </HStack>
        <HStack align="flex-start" spacing={4}>
          <Center
            boxSize={12}
            bg="purple.500"
            rounded="md"
            flexShrink={0}
            color="white"
          >
            <Icon as={HiOutlineEmojiHappy} boxSize={6} />
          </Center>
          <Stack>
            <Heading as="h5" fontWeight="medium" fontSize="md">
              Friendly, personal service
            </Heading>
            <Text color="gray.500">
              We’re always available to answer your questions—we love connecting
              with our customers to understand their needs.
            </Text>
          </Stack>
        </HStack>
        <HStack align="flex-start" spacing={4}>
          <Center
            boxSize={12}
            bg="purple.500"
            rounded="md"
            flexShrink={0}
            color="white"
          >
            <Icon as={HiOutlineCalendar} boxSize={6} />
          </Center>
          <Stack>
            <Heading as="h5" fontWeight="medium" fontSize="md">
              Yearly reviews
            </Heading>
            <Text color="gray.500">
              We schedule a review of your account every year to see how your
              account is getting on and recommend any changes.
            </Text>
          </Stack>
        </HStack>
        <HStack align="flex-start" spacing={4}>
          <Center
            boxSize={12}
            bg="purple.500"
            rounded="md"
            flexShrink={0}
            color="white"
          >
            <Icon as={HiOutlineCurrencyEuro} boxSize={6} />
          </Center>
          <Stack>
            <Heading as="h5" fontWeight="medium" fontSize="md">
              Completely free service with no hidden fees
            </Heading>
            <Text color="gray.500">
              Our services are totally free. Everything we quote you is what
              you’ll be charged.
            </Text>
          </Stack>
        </HStack>
      </SimpleGrid>
    </Box>
  );
}
