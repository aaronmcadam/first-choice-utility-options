import {
  HStack,
  Icon,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  HiHeart,
  HiShoppingBag,
  HiScale,
  HiSun,
  HiEmojiHappy,
  HiOfficeBuilding,
  HiCog,
  HiGlobe,
} from "react-icons/hi";

export function Sectors() {
  return (
    <Stack align="center" spacing={6} py={16}>
      <Heading
        as="h4"
        color="gray.600"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        Trusted by companies across many business sectors
      </Heading>
      <HStack spacing={8}>
        <HStack spacing={1} color="gray.500">
          <Icon as={HiHeart} boxSize={5} />
          <Text fontWeight="medium">Healthcare</Text>
        </HStack>
        <HStack spacing={1} color="gray.500">
          <Icon as={HiShoppingBag} boxSize={5} />
          <Text fontWeight="medium">Retail</Text>
        </HStack>
        <HStack spacing={1} color="gray.500">
          <Icon as={HiScale} boxSize={5} />
          <Text fontWeight="medium">Legal</Text>
        </HStack>
        <HStack spacing={1} color="gray.500">
          <Icon as={HiSun} boxSize={5} />
          <Text fontWeight="medium">Tourism</Text>
        </HStack>
        <HStack spacing={1} color="gray.500">
          <Icon as={HiEmojiHappy} boxSize={5} />
          <Text fontWeight="medium">Leisure</Text>
        </HStack>
        <HStack spacing={1} color="gray.500">
          <Icon as={HiOfficeBuilding} boxSize={5} />
          <Text fontWeight="medium">Business</Text>
        </HStack>
        <HStack spacing={1} color="gray.500">
          <Icon as={HiCog} boxSize={5} />
          <Text fontWeight="medium">Industrial</Text>
        </HStack>
        <HStack spacing={1} color="gray.500">
          <Icon as={HiGlobe} boxSize={5} />
          <Text fontWeight="medium">Agricultural</Text>
        </HStack>
      </HStack>
    </Stack>
  );
}
