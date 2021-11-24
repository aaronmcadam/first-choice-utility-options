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

export function Footer() {
  // TODO: Inject current year.
  return (
    <Box as="footer" bg="gray.50">
      <Box px={6} py={12} mx="auto">
        <Text color="gray.500" textAlign={{ base: "center", sm: "left" }}>
          &copy; 2021 First Choice Utility Options Ltd. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
