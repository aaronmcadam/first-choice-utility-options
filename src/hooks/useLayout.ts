import { useBreakpointValue } from "@chakra-ui/react";

export function useLayout() {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const isDesktop = !isMobile;

  return { isMobile, isDesktop };
}
