"use client";
import { Button, DEFAULT_THEME, Stack, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { closeModal } from "@mantine/modals";
import { IconArrowLeft } from "@tabler/icons-react";
import { FC, useCallback } from "react";

import { ColorPicker } from "@/app/components/ColorPicker";
import { Icon } from "@/app/components/Icon";
import { ModalActions } from "@/app/components/ModalActions";

import {
  UpsertTimespanFormData,
  UpsertTimespanFormProps,
} from "./UpsertTimespanForm.typings";

export const UpsertTimespanForm: FC<UpsertTimespanFormProps> = ({
  type,
  timespan,
  isButtonLoading,
  onSubmit,
}) => {
  const form = useForm<UpsertTimespanFormData>({
    initialValues: {
      title: timespan?.title || "",
      startDate: timespan?.startDate || new Date(),
      endDate: timespan?.endDate || new Date(),
      color: timespan?.color || DEFAULT_THEME.colors.green[5],
    },
  });

  const handleBack = useCallback(() => {
    closeModal("upsert-timespan");
  }, []);

  const handleSubmit = form.onSubmit(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="xs">
        <TextInput
          required
          label="Название промежутка"
          {...form.getInputProps("title")}
        />
        <DateInput
          required
          maxDate={form.values.endDate}
          label="Начало промежутка"
          {...form.getInputProps("startDate")}
        />
        <DateInput
          required
          minDate={form.values.startDate}
          label="Конец промежутка"
          {...form.getInputProps("endDate")}
        />
        <ColorPicker
          required
          label="Цвет промежутка"
          {...form.getInputProps("color")}
        />
      </Stack>

      <ModalActions>
        <Button onClick={handleBack} leftSection={<Icon As={IconArrowLeft} />}>
          Назад
        </Button>
        <Button loading={isButtonLoading} variant="filled" type="submit">
          {type === "create"
            ? "Создать промежуток"
            : "Редактировать промежуток"}
        </Button>
      </ModalActions>
    </form>
  );
};
