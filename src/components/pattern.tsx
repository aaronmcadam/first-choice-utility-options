import { chakra, HTMLChakraProps, VisuallyHidden } from "@chakra-ui/react";

export interface PatternProps extends HTMLChakraProps<"svg"> {}

export function Pattern(props: PatternProps) {
  return (
    <>
      <chakra.svg
        viewBox="0 0 784 404"
        fill="none"
        aria-hidden="true"
        {...props}
      >
        <defs>
          7
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#pattern)" />
      </chakra.svg>
    </>
  );
}
