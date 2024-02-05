import { FC } from "react";
import { Image } from "@mantine/core";

import { FALLBACK_SRC } from "./CalenarPreviewImage.const";
import { CalendarPreviewImageProps } from "./CalendarPreviewImage.typings";

import classes from "./CalendarPreviewImage.module.css";

export const CalendarPreviewImage: FC<CalendarPreviewImageProps> = ({
  src = FALLBACK_SRC,
  alt = "",
  ...props
}) => {
  return (
    <Image
      fallbackSrc={FALLBACK_SRC}
      src={src}
      className={classes.image}
      alt={alt}
      {...props}
    />
  );
};
