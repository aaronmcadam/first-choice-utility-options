import { chakra, HTMLChakraProps, VisuallyHidden } from "@chakra-ui/react";

export interface PlayIconProps extends HTMLChakraProps<"svg"> {}

export function PlayIcon(props: PlayIconProps) {
  return (
    <>
      <chakra.svg
        viewBox="0 0 84 84"
        fill="currentColor"
        aria-hidden="true"
        data-testid="play-icon"
        {...props}
      >
        <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
      </chakra.svg>
    </>
  );
}
