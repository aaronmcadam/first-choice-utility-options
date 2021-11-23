import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

export function CeoMessage() {
  return (
    <HStack spacing={10} maxW="6xl" mx="auto" px={6}>
      <Avatar size="3xl" src="/danny.png" />
      <Stack spacing={8}>
        <Text fontWeight="medium" fontSize="xl" maxW="2xl">
          Our priority is the customer, not the provider. People are often
          amazed at the saving that they can make—we’ve helped business across
          many sectors save thousands on their electricity bills.
        </Text>
        <Stack spacing={0}>
          <Text fontWeight="medium">Daniel McAdam</Text>
          <Text fontWeight="medium" color="purple.600">
            CEO, First Choice Utility Options
          </Text>
        </Stack>
      </Stack>
    </HStack>
  );
}
