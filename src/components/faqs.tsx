import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export function Faqs() {
  return (
    <Box bg="pink.50">
      <Box maxW="6xl" mx="auto" px={6} py={16}>
        <Heading fontSize="3xl" fontWeight="extrabold" color="pink.900">
          Frequently asked questions
        </Heading>
        <Box mt={6} borderTopWidth="1px" borderColor="pink.200" pt={10}>
          <SimpleGrid as="dl" columns={2} spacingX={8} spacingY={12}>
            <Stack>
              <Text as="dt" fontSize="lg" fontWeight="medium" color="pink.900">
                Do I have to pay for using your services?
              </Text>
              <Text as="dd" color="pink.600">
                No, there is no fee for using the services of First Choice
                Utility Options.
              </Text>
            </Stack>
            <Stack>
              <Text as="dt" fontSize="lg" fontWeight="medium" color="pink.900">
                Are you tied to any particular electricity provider?
              </Text>
              <Text as="dd" color="pink.600">
                No, we are entirely independent of all electricity providers. We
                will use the provider that offers you the best savings.
              </Text>
            </Stack>
            <Stack>
              <Text as="dt" fontSize="lg" fontWeight="medium" color="pink.900">
                Can I achieve the same savings by directly negotiating a deal
                myself?
              </Text>
              <Text as="dd" color="pink.600">
                We represent thousands of businesses across Ireland. While you
                can go directly to the providers yourself to see what they offer
                you, you won’t have the same buying power to get the very best
                price.
              </Text>
            </Stack>
            <Stack>
              <Text as="dt" fontSize="lg" fontWeight="medium" color="pink.900">
                Suppose I change my electricity supplier based on your
                recommendations. What happens when my contract finishes? Will
                you check again for further savings for me?
              </Text>
              <Text as="dd" color="pink.600">
                Yes. Electricity prices are constantly changing. We start
                looking for the best deals for you three months before your
                contract ends, so you can be sure we’ll get you the lowest price
                when it’s time to find a new one.
              </Text>
            </Stack>
            <Stack>
              <Text as="dt" fontSize="lg" fontWeight="medium" color="pink.900">
                If I decide to change electricity providers, is there much
                paperwork involved?
              </Text>
              <Text as="dd" color="pink.600">
                No, we deal with all aspects of the change of provider on your
                behalf—you only need to sign the contract.
              </Text>
            </Stack>
            <Stack>
              <Text as="dt" fontSize="lg" fontWeight="medium" color="pink.900">
                Can you help me make savings in any other parts of my business?
              </Text>
              <Text as="dd" color="pink.600">
                Yes, we can also help you make savings on merchant and
                communication services.
              </Text>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
