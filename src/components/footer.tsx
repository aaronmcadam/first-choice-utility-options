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
      <Box px={6} py={12} maxW="6xl" mx="auto">
        <Text color="gray.500">
          &copy; 2021 First Choice Utility Options Ltd. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
