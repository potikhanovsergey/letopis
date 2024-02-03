import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Button, NumberInput, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

import { ModalActions } from "@/app/components/ModalActions";
import { calendarData$ } from "@/app/stores";
import { useUpdateCalendar } from "@/db/hooks";

export const SettingsModalFeature: FC = () => {
  const rows = useSelector(calendarData$.rows);
  const id = useSelector(calendarData$.id);
  const startDate = useSelector(calendarData$.startDate);

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
      calendarData$.set((state) => ({
        ...state,
        startDate: data.startDate,
        rows: data.rows,
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
