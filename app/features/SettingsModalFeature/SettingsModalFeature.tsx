import { FC } from "react";
import { batch } from "@legendapp/state";
import { useSelector } from "@legendapp/state/react";
import { Button, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

import { ModalActions } from "@/app/components/ModalActions";
import { calendarData$ } from "@/app/stores";
import { useUpdateCalendar } from "@/db/hooks";

export const SettingsModalFeature: FC = () => {
  const id = useSelector(calendarData$.id);
  const startDate = useSelector(calendarData$.startDate);
  const endDate = useSelector(calendarData$.endDate);

  const { mutateAsync: updateCalendar, isPending: loading } =
    useUpdateCalendar();

  const form = useForm({
    initialValues: {
      startDate,
      endDate,
    },
  });

  const handleSubmit = form.onSubmit(async ({ startDate, endDate }) => {
    const data = await updateCalendar({
      where: { id },
      data: { startDate, endDate },
      select: { startDate: true, endDate: true },
    });
    if (data) {
      batch(() => {
        calendarData$.startDate.set(data.startDate);
        calendarData$.endDate.set(data.endDate);
      });
    }
    modals.closeAll();
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <DateInput
          label="Дата начала"
          maxDate={form.values.endDate}
          {...form.getInputProps("startDate")}
        />
        <DateInput
          label="Дата конца"
          minDate={form.values.startDate}
          {...form.getInputProps("endDate")}
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
