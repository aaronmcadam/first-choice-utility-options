import { Box, Button, Heading, Stack } from "@chakra-ui/react";

export function Cta() {
  return (
    <Box mx="auto">
      <Stack spacing={8} align="flex-start" px={{ base: 4, sm: 6 }} py={16}>
        <Heading fontSize="3xl" fontWeight="extrabold" letterSpacing="tight">
          <Box as="span" display="block">
            Ready to save on your electricity?
          </Box>
          <Box as="span" display="block" color="purple.600">
            Get in touch today.
          </Box>
        </Heading>
        <Button as="a" href="tel:00353872470718" variant="primary" size="lg">
          Call us
        </Button>
      </Stack>
    </Box>
  );
}
