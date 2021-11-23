import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
import { Pattern } from "./pattern";
import { QuotesIcon } from "./quotes-icon";

export function CeoMessage() {
  return (
    <Box overflowY="hidden">
      <HStack spacing={10} maxW="6xl" mx="auto" pos="relative" py={20}>
        <Pattern
          color="gray.200"
          h="404px"
          pos="absolute"
          left={0}
          transform="auto"
          translateX={-60}
        />
        <Avatar size="3xl" src="/danny.png" />
        <Box pos="relative" ml={10}>
          <QuotesIcon
            boxSize={36}
            pos="absolute"
            top={0}
            left={0}
            transform="auto"
            translateX={-8}
            translateY={-24}
            color="purple.200"
            opacity={0.5}
          />
          <Stack as="blockquote" spacing={8} pos="relative">
            <Text fontWeight="medium" fontSize="xl" maxW="2xl">
              Our priority is the customer, not the provider. People are often
              amazed at the saving that they can make—we’ve helped business
              across many sectors save thousands on their electricity bills.
            </Text>
            <Stack spacing={0}>
              <Text fontWeight="medium">Daniel McAdam</Text>
              <Text fontWeight="medium" color="purple.600">
                CEO, First Choice Utility Options
              </Text>
            </Stack>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
}
