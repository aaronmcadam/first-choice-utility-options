import { extendTheme, ThemeConfig, withDefaultVariant } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { Button } from "./components/button";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  {
    config,
    components: {
      Button: Button,
    },
    colors: colors,
    breakpoints: breakpoints,
  },
  withDefaultVariant({
    variant: "secondary",
    components: ["Button"],
  })
);
