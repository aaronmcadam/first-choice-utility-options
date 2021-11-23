import { Box, Button, Heading, Stack } from "@chakra-ui/react";

export function Cta() {
  return (
    <Box maxW="6xl" mx="auto">
      <Stack spacing={8} align="flex-start" px={6} py={16}>
        <Heading fontSize="3xl" fontWeight="extrabold" letterSpacing="tight">
          <Box as="span" display="block">
            Ready to save on your electricity?
          </Box>
          <Box as="span" display="block" color="purple.600">
            Get in touch today.
          </Box>
        </Heading>
        <Button variant="primary" size="lg">
          Call us
        </Button>
      </Stack>
    </Box>
  );
}
