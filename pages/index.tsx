import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { CeoMessage } from "../src/components/ceo-message";
import { Cta } from "../src/components/cta";
import { Faqs } from "../src/components/faqs";
import { Features } from "../src/components/features";
import { Footer } from "../src/components/footer";
import { Hero } from "../src/components/hero";
import { Logo } from "../src/components/logo";
import { Providers } from "../src/components/providers";
import { Sectors } from "../src/components/sectors";
import { Testimonials } from "../src/components/testimonials";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>First Choice Utility Options</title>
        <meta
          name="description"
          content="Guaranteeing you the best electricity price in the market today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" pt={10}>
        <Hero />
        <Sectors />
        <Features />
        <CeoMessage />
        <Testimonials />
        <Providers />
        <Faqs />
        <Cta />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
