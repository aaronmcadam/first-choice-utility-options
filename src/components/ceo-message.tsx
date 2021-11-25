import {
  Avatar,
  Box,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Pattern } from "./pattern";
import { QuotesIcon } from "./quotes-icon";

export function CeoMessage() {
  const isLarge = useBreakpointValue({ lg: true });
  const belowLarge = !isLarge;

  return (
    <Box overflowY="hidden" px={4}>
      <HStack
        spacing={10}
        pos="relative"
        pt={24}
        pb={12}
        px={4}
        maxW="7xl"
        mx="auto"
      >
        {isLarge ? (
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
        <Box pos="relative" ml={{ lg: 10 }}>
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
              {belowLarge ? <Avatar size="md" src="/danny.png" /> : null}
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
