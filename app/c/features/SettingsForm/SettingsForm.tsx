import { FC } from "react";
import { batch } from "@legendapp/state";
import { useSelector } from "@legendapp/state/react";
import { Button, Select, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

import { FORMAT_DATA, VISIBILITY_DATA } from "@/app/app.const";
import { ModalActions } from "@/app/components/ModalActions";
import { calendarData$ } from "@/app/stores";
import { useUpdateCalendar } from "@/db/hooks";

const SettingsForm: FC = () => {
  const id = useSelector(calendarData$.id);
  const startDate = useSelector(calendarData$.startDate);
  const endDate = useSelector(calendarData$.endDate);
  const visibility = useSelector(calendarData$.visibility);
  const format = useSelector(calendarData$.format);

  const { mutateAsync: updateCalendar, isPending: loading } =
    useUpdateCalendar();

  const form = useForm({
    initialValues: {
      startDate,
      endDate,
      visibility,
      format,
    },
  });

  const handleSubmit = form.onSubmit(
    async ({ startDate, endDate, visibility, format }) => {
      const data = await updateCalendar({
        where: { id },
        data: { startDate, endDate, visibility, format },
        select: {
          startDate: true,
          endDate: true,
          visibility: true,
          format: true,
        },
      });
      if (data) {
        batch(() => {
          calendarData$.startDate.set(data.startDate);
          calendarData$.endDate.set(data.endDate);
          calendarData$.visibility.set(data.visibility);
          calendarData$.format.set(data.format);
        });
      }
      modals.closeAll();
    }
  );

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
        <Select
          label="Формат календаря"
          data={FORMAT_DATA}
          {...form.getInputProps("format")}
        />
        <Select
          label="Видимость календаря"
          data={VISIBILITY_DATA}
          {...form.getInputProps("visibility")}
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

export default SettingsForm;
