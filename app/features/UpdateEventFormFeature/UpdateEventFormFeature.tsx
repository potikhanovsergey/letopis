"use client";
import { FC, useCallback } from "react";

import { UpsertEventForm } from "@/app/components/UpsertEventForm";
import { UpsertEventFormData } from "@/app/components/UpsertEventForm/UpsertEventForm.typings";
import { updateCellEvent } from "@/app/stores/calendar/actions";
import { useUpdateEvent } from "@/db/hooks";

import { UpdateEventFormFeatureProps } from "./UpdateEventFormFeature.typings";

export const UpdateEventFormFeature: FC<UpdateEventFormFeatureProps> = ({
  onUpdated,
  event,
}) => {
  const { mutateAsync: updateEvent, isPending } = useUpdateEvent();

  const handleSubmit = useCallback(
    async ({ referenceLink, ...values }: UpsertEventFormData) => {
      const newEvent = await updateEvent({
        where: {
          id: event.id,
        },
        data: {
          referenceLink: referenceLink || null,
          ...values,
        },
      });
      if (newEvent) {
        updateCellEvent(newEvent);
        onUpdated?.();
      }
    },
    [event.id, onUpdated, updateEvent]
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
