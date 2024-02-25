"use client";
import { FC, useCallback } from "react";
import { Button, Input, Stack, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { closeModal } from "@mantine/modals";
import { IconArrowLeft } from "@tabler/icons-react";

import { Icon } from "@/app/components/Icon";
import IconPicker from "@/app/components/IconPicker";
import { ModalActions } from "@/app/components/ModalActions";

import {
  UpsertEventFormData,
  UpsertEventFormProps,
} from "./UpsertEventForm.typings";

export const UpsertEventForm: FC<UpsertEventFormProps> = ({
  type,
  event,
  isButtonLoading,
  onSubmit,
}) => {
  const form = useForm<UpsertEventFormData>({
    initialValues: {
      title: event?.title || "",
      date: event?.date || new Date(),
      icon: event?.icon || "🔴",
      referenceLink: event?.referenceLink || "",
    },
  });

  const handleBack = useCallback(() => {
    closeModal("upsert-event");
  }, []);

  const handleSubmit = form.onSubmit(onSubmit);

  const handleIconPick = useCallback((value: string) => {
    form.setFieldValue("icon", value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="xs">
        <TextInput
          required
          label="Название события"
          {...form.getInputProps("title")}
        />
        <DateInput
          required
          label="Дата события"
          {...form.getInputProps("date")}
        />
        <TextInput
          label="Ссылка на источник"
          {...form.getInputProps("referenceLink")}
        />
        <Input.Wrapper label="Иконка события" required>
          <IconPicker value={form.values.icon} onChange={handleIconPick} />
        </Input.Wrapper>
      </Stack>

      <ModalActions>
        <Button onClick={handleBack} leftSection={<Icon As={IconArrowLeft} />}>
          Назад
        </Button>
        <Button loading={isButtonLoading} variant="filled" type="submit">
          {type === "create" ? "Создать событие" : "Редактировать событие"}
        </Button>
      </ModalActions>
    </form>
  );
};
