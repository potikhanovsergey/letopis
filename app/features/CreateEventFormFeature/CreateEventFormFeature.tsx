"use client";
import { FC, useCallback } from "react";

import { UpsertEventForm } from "@/app/components/UpsertEventForm";
import { UpsertEventFormData } from "@/app/components/UpsertEventForm/UpsertEventForm.typings";
import { useCalendarStore } from "@/app/stores";
import { addCellEvent } from "@/app/stores/calendar/actions";
import { getIndexedEvent } from "@/app/stores/calendar/utils";
import { useCreateEvent } from "@/db/hooks";

import { CreateEventFormFeatureProps } from "./CreateEventFormFeature.typings";

export const CreateEventFormFeature: FC<CreateEventFormFeatureProps> = ({
  onCreated,
}) => {
  const calendarId = useCalendarStore((state) => state.data.id);
  const startDate = useCalendarStore((state) => state.data.startDate);

  const { mutateAsync: createEvent, isPending: isCreating } = useCreateEvent();

  const handleSubmit = useCallback(
    async (values: UpsertEventFormData) => {
      const newEvent = await createEvent({ data: { calendarId, ...values } });

      if (newEvent) {
        const indexedEvent = getIndexedEvent(newEvent, startDate);
        addCellEvent(indexedEvent);
        onCreated?.();
      }
    },
    [calendarId, createEvent, onCreated, startDate]
  );

  return (
    <UpsertEventForm
      type="create"
      isButtonLoading={isCreating}
      onSubmit={handleSubmit}
    />
  );
};
