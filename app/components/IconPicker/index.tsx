"use client";
import { FC, useCallback } from "react";
import { Button, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPickerProps } from "./typings";
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("@emoji-mart/react"));

const IconPicker: FC<IconPickerProps> = ({ value, onChange }) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleSelect = useCallback(
    (value: { native: string }) => {
      onChange(value.native);
      close();
    },
    [close, onChange],
  );

  return (
    <div>
      <Popover onClose={close} withinPortal opened={opened}>
        <Popover.Target>
          <Button leftSection={value} onClick={toggle}>
            Выбрать иконку
          </Button>
        </Popover.Target>
        <Popover.Dropdown bg="transparent" p={0}>
          {opened && (
            <Picker
              theme="dark"
              icons="outline"
              locale="ru"
              onEmojiSelect={handleSelect}
            />
          )}
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default IconPicker;
