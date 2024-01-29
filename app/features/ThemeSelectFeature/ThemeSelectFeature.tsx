"use client";
import { FC, useCallback } from "react";
import {
  Combobox,
  MantineColorScheme,
  UnstyledButton,
  useCombobox,
  useMantineColorScheme,
} from "@mantine/core";

import { THEMES, THEMES_LABELS } from "./ThemeSelectFeature.const";
import { ThemeSelectFeatureProps } from "./ThemeSelectFeature.typings";

export const ThemeSelectFeature: FC<ThemeSelectFeatureProps> = ({
  component,
}) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const combobox = useCombobox();

  const options = THEMES.map((theme) => (
    <Combobox.Option value={theme} key={theme} active={theme === colorScheme}>
      {THEMES_LABELS[theme]}
    </Combobox.Option>
  ));

  const handleTargetClick = useCallback(() => {
    combobox.toggleDropdown();
  }, [combobox]);

  const handleOptionSubmit = useCallback(
    (value: string) => {
      setColorScheme(value as MantineColorScheme);
    },
    [setColorScheme]
  );

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      size="xs"
      onOptionSubmit={handleOptionSubmit}
      position="left"
      withArrow
    >
      <Combobox.Target targetType="button">
        <UnstyledButton
          component={component as "button"}
          onClick={handleTargetClick}
        >
          {THEMES_LABELS[colorScheme]}
        </UnstyledButton>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
