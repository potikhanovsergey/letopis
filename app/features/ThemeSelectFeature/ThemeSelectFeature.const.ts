import { MantineColorScheme } from "@mantine/core";

export const THEMES = ["light", "dark", "auto"] as MantineColorScheme[];

export const THEMES_LABELS: { [key in MantineColorScheme]: string } = {
  light: "Светлая тема",
  dark: "Темная тема",
  auto: "Системная тема",
};
