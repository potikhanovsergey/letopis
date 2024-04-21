import { GPT_SUGGESTIONS_MODAL_ID } from "@/app/(fsd)/app/constants";
import { GptSuggestionsProps } from "@/app/c/features/GptSuggestions/types";
import { ModalActions } from "@/app/components/ModalActions";
import { calendarData$ } from "@/app/stores";
import { addCellEvent } from "@/app/stores/calendar/actions";
import { useCreateEvent } from "@/db/hooks";
import { useSelector } from "@legendapp/state/react";
import {
  Box,
  Button,
  Fieldset,
  Group,
  LoadingOverlay,
  Stack,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { closeAllModals, closeModal } from "@mantine/modals";
import { FC, useCallback } from "react";

const GptSuggestions: FC<GptSuggestionsProps> = ({ suggestions }) => {
  const form = useForm({
    initialValues: {
      items: suggestions,
    },
  });
  const [loading, { open: startLoading, close: endLoading }] = useDisclosure();

  const calendarId = useSelector(calendarData$.id);

  const createEvent = useCreateEvent();

  const handleSubmit = form.onSubmit(async (values) => {
    startLoading();
    for (let item of values.items) {
      const created = await createEvent.mutateAsync({
        data: { calendarId, ...item, icon: "🟢" },
      });
      if (created) {
        addCellEvent(created);
      }
    }
    endLoading();
    closeAllModals();
  });

  const handleBack = useCallback(() => {
    closeModal(GPT_SUGGESTIONS_MODAL_ID);
  }, []);

  return (
    <Box component="form" pos="relative" onSubmit={handleSubmit}>
      <LoadingOverlay visible={loading} />
      <Stack>
        {form.values.items.map((item, index) => (
          <Fieldset key={item.title} legend={`Событие ${index + 1}`}>
            <TextInput
              label="Название события"
              {...form.getInputProps(`items.${index}.title`)}
            />
            <DateInput
              label="Дата события"
              {...form.getInputProps(`items.${index}.date`)}
            />
            <Group mt="xs" justify="flex-end">
              <Button
                onClick={() => form.removeListItem("items", index)}
                color="red"
              >
                Удалить предложение
              </Button>
            </Group>
          </Fieldset>
        ))}
      </Stack>
      <ModalActions>
        <Button onClick={handleBack}>Попробовать другой запрос</Button>
        <Button type="submit">Добавить в календарь</Button>
      </ModalActions>
    </Box>
  );
};

export default GptSuggestions;
