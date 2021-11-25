import { Box, Text } from "@chakra-ui/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="gray.50">
      <Box px={6} py={12} maxW="7xl" mx="auto">
        <Text color="gray.500" textAlign={{ base: "center", sm: "left" }}>
          &copy; 2017-{currentYear} First Choice Utility Options Ltd. All rights
          reserved.
        </Text>
      </Box>
    </Box>
  );
}
