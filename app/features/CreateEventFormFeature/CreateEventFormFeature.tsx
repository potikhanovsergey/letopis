"use client";
import { FC, useCallback } from "react";
import { useSelector } from "@legendapp/state/react";

import { UpsertEventForm } from "@/app/components/UpsertEventForm";
import { UpsertEventFormData } from "@/app/components/UpsertEventForm/UpsertEventForm.typings";
import { calendarData$ } from "@/app/stores";
import { addCellEvent } from "@/app/stores/calendar/actions";
import { useCreateEvent } from "@/db/hooks";

import { CreateEventFormFeatureProps } from "./CreateEventFormFeature.typings";

export const CreateEventFormFeature: FC<CreateEventFormFeatureProps> = ({
  onCreated,
}) => {
  const calendarId = useSelector(calendarData$.id);

  const { mutateAsync: createEvent, isPending: isCreating } = useCreateEvent();

  const handleSubmit = useCallback(
    async (values: UpsertEventFormData) => {
      const newEvent = await createEvent({ data: { calendarId, ...values } });

      if (newEvent) {
        addCellEvent(newEvent);
        onCreated?.();
      }
    },
    [calendarId, createEvent, onCreated]
  );

  return (
    <UpsertEventForm
      type="create"
      isButtonLoading={isCreating}
      onSubmit={handleSubmit}
    />
  );
};
