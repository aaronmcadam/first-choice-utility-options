import NextImage, { ImageProps as NextImageProps } from "next/image";
import { chakra, ImageProps as ChakraImageProps } from "@chakra-ui/react";

export const OptimisedImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "layout",
      "src",
      "alt",
      "placeholder",
      "width",
      "height",
      "priority",
    ].includes(prop),
});

type ImageProps = NextImageProps & Omit<ChakraImageProps, "src">;

export const Image = (props: ImageProps) => <OptimisedImage {...props} />;
