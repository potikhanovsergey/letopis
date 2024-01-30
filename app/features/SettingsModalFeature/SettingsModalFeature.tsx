import { FC } from "react";
import { Button, NumberInput, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

import { ModalActions } from "@/app/components/ModalActions";
import { useCalendarStore } from "@/app/stores";
import { setRows, setStartDate } from "@/app/stores/calendar/actions";

export const SettingsModalFeature: FC = () => {
  const rows = useCalendarStore((state) => state.rows);
  const startDate = useCalendarStore((state) => state.startDate);

  const form = useForm({
    initialValues: {
      rows,
      startDate,
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    setRows(values.rows);
    setStartDate(values.startDate);

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
        <Button type="submit">Подтвердить</Button>
      </ModalActions>
    </form>
  );
};
