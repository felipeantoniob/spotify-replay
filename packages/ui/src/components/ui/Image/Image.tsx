import type { ImageProps as NextImageProps } from "next/image";
import type { HTMLProps } from "react";
import React from "react";
import NextImage from "next/image";

interface ImageProps {
  useNextImage?: boolean;
}

type CustomNextImageProps = ImageProps & NextImageProps;

type CustomImgProps = ImageProps & HTMLProps<HTMLImageElement>;

function Image({
  useNextImage = false,
  ...imageProps
}: CustomNextImageProps | CustomImgProps) {
  if (useNextImage) return <NextImage {...(imageProps as NextImageProps)} />;

  return <img {...(imageProps as HTMLProps<HTMLImageElement>)} />;
}

export { Image };
