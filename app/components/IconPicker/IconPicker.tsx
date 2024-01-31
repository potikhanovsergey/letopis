import { FC } from "react";
import { Chip, ChipGroupProps, Group } from "@mantine/core";

import { Icon } from "@/app/components/Icon";

import { icons } from "./IconPicker.const";

import classes from "./IconPicker.module.css";

export const IconPicker: FC<ChipGroupProps> = (props) => {
  return (
    <Chip.Group {...props}>
      <Group gap={4}>
        {Object.entries(icons).map(([key, value]) => (
          <Chip
            size="sm"
            classNames={{
              iconWrapper: classes.iconWrapper,
              label: classes.label,
            }}
            value={key}
            key={key}
          >
            <Icon As={value} />
          </Chip>
        ))}
      </Group>
    </Chip.Group>
  );
};
