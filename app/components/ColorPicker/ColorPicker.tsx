import { FC } from "react";
import {
  ColorInput,
  ColorInputProps,
  DEFAULT_THEME,
  MantineColor,
} from "@mantine/core";

const colors: MantineColor[] = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "violet",
  "pink",
];

const swatches: string[] = [];

for (let color of colors) {
  swatches.push(...DEFAULT_THEME.colors[color].slice(3, 9));
}

export const ColorPicker: FC<ColorInputProps> = (props) => {
  return (
    <ColorInput
      disallowInput
      withEyeDropper={false}
      withPicker={false}
      swatches={swatches}
      swatchesPerRow={6}
      {...props}
    />
  );
};
