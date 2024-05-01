"use client";
import { Button, Group, TextInput } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChangeEventHandler,
  FC,
  useCallback,
  useState,
  useTransition,
} from "react";

export const SearchFeature: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("search") ?? "");
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setValue(e.currentTarget.value);
    },
    []
  );

  const [loading, startTransition] = useTransition();

  const handleSearch = useCallback(() => {
    startTransition(() => {
      router.push(`/?search=${value}`);
    });
  }, [router, value]);

  return (
    <Group>
      <TextInput
        flex={1}
        disabled={loading}
        placeholder="Найти по названию"
        onKeyDown={getHotkeyHandler([["Enter", handleSearch]])}
        value={value}
        onChange={handleChange}
      />
      <Button loading={loading} onClick={handleSearch} h={36}>
        Найти
      </Button>
    </Group>
  );
};
