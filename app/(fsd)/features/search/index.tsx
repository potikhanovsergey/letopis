"use client";
import { TextInput } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FC, useCallback, useState } from "react";

export const SearchFeature: FC = () => {
  const [value, setValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setValue(e.currentTarget.value);
    },
    []
  );

  const router = useRouter();

  const handleSearch = useCallback(() => {
    router.push(`/?search=${value}`);
  }, [router, value]);

  return (
    <TextInput
      onKeyDown={getHotkeyHandler([["Enter", handleSearch]])}
      value={value}
      onChange={handleChange}
    />
  );
};
