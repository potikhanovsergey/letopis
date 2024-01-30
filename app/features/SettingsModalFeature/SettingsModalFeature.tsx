import { FC } from "react";
import { Button, NumberInput, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

import { ModalActions } from "@/app/components/ModalActions";
import { useCalendarStore } from "@/app/stores";
import { useUpdateCalendar } from "@/db/hooks";

export const SettingsModalFeature: FC = () => {
  const rows = useCalendarStore((state) => state.data.rows);
  const startDate = useCalendarStore((state) => state.data.startDate);
  const id = useCalendarStore((state) => state.data.id);

  const { mutateAsync: updateCalendar, isPending: loading } =
    useUpdateCalendar();

  const form = useForm({
    initialValues: {
      rows,
      startDate,
    },
  });

  const handleSubmit = form.onSubmit(async ({ startDate, rows }) => {
    const data = await updateCalendar({
      where: { id },
      data: { startDate, rows },
      select: { startDate: true, rows: true },
    });
    if (data) {
      useCalendarStore.setState((state) => ({
        data: {
          ...state.data,
          startDate: data.startDate,
          rows: data.rows,
        },
      }));
    }
    modals.closeAll();
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <NumberInput
          description="От 12 до 100"
          label="Количество лет"
          min={12}
          max={100}
          {...form.getInputProps("rows")}
        />
        <DateInput
          label="Стартовая дата"
          {...form.getInputProps("startDate")}
        />
      </Stack>

      <ModalActions>
        <Button loading={loading} type="submit">
          Подтвердить
        </Button>
      </ModalActions>
    </form>
  );
};
