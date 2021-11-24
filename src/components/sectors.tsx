import {
  HStack,
  Icon,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
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

function Sector({ icon, label }: { icon: IconType; label: string }) {
  return (
    <Flex align="center" color="gray.500" p={{ base: 4, sm: 5 }}>
      <Icon as={icon} boxSize={5} />
      <Text as="span" fontWeight="medium" ml={1} lineHeight="20px">
        {label}
      </Text>
    </Flex>
  );
}

export function Sectors() {
  return (
    <Stack align="center" spacing={6} py={16} px={{ base: 4, sm: 6 }}>
      <Heading
        as="h4"
        color="gray.600"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
        textAlign="center"
      >
        Trusted by companies across many business sectors
      </Heading>
      <Flex align="center" justify="center" wrap="wrap" maxW="2xl">
        <Sector icon={HiHeart} label="Healthcare" />
        <Sector icon={HiShoppingBag} label="Retail" />
        <Sector icon={HiScale} label="Legal" />
        <Sector icon={HiSun} label="Tourism" />
        <Sector icon={HiEmojiHappy} label="Leisure" />
        <Sector icon={HiOfficeBuilding} label="Business" />
        <Sector icon={HiCog} label="Industrial" />
        <Sector icon={HiGlobe} label="Agricultural" />
      </Flex>
    </Stack>
  );
}
