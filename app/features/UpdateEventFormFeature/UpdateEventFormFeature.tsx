"use client";
import { FC, useCallback } from "react";

import { UpsertEventForm } from "@/app/components/UpsertEventForm";
import { UpsertEventFormData } from "@/app/components/UpsertEventForm/UpsertEventForm.typings";
import { useCalendarStore } from "@/app/stores";
import { updateCellEvent } from "@/app/stores/calendar/actions";
import { getIndexedEvent } from "@/app/stores/calendar/utils";
import { useUpdateEvent } from "@/db/hooks";

import { UpdateEventFormFeatureProps } from "./UpdateEventFormFeature.typings";

export const UpdateEventFormFeature: FC<UpdateEventFormFeatureProps> = ({
  onUpdated,
  event,
}) => {
  const startDate = useCalendarStore((state) => state.data.startDate);

  const { mutateAsync: updateEvent, isPending } = useUpdateEvent();

  const handleSubmit = useCallback(
    async (values: UpsertEventFormData) => {
      const newEvent = await updateEvent({
        where: {
          id: event.id,
        },
        data: {
          ...values,
        },
      });
      if (newEvent) {
        const indexedEvent = getIndexedEvent(newEvent, startDate);
        updateCellEvent(indexedEvent);
        onUpdated?.();
      }
    },
    [event.id, onUpdated, startDate, updateEvent]
  );

  return (
    <UpsertEventForm
      type="update"
      event={event}
      isButtonLoading={isPending}
      onSubmit={handleSubmit}
    />
  );
};
