import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useLayout } from "../hooks/useLayout";
import { Pattern } from "./pattern";
import { QuotesIcon } from "./quotes-icon";

export function CeoMessage() {
  const { isMobile, isDesktop } = useLayout();

  return (
    <Box overflowY="hidden" px={4}>
      <HStack spacing={10} pos="relative" py={24} maxW="7xl" mx="auto">
        {isDesktop ? (
          <>
            <Pattern
              color="gray.200"
              h="404px"
              pos="absolute"
              left={0}
              transform="auto"
              translateX={-60}
            />
            <Avatar size="3xl" src="/danny.png" />
          </>
        ) : null}
        <Box pos="relative" ml={{ base: 0, sm: 10 }}>
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
              amazed at the savings they can make—we’ve helped business across
              many sectors save thousands on their electricity bills.
            </Text>
            <HStack spacing={3}>
              {isMobile ? <Avatar size="md" src="/danny.png" /> : null}
              <Stack spacing={0}>
                <Text fontWeight="medium">Daniel McAdam</Text>
                <Text fontWeight="medium" color="purple.600">
                  CEO, First Choice Utility Options
                </Text>
              </Stack>
            </HStack>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
}
