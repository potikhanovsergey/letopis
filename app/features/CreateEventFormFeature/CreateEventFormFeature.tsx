"use client";
import { FC, useCallback } from "react";

import { UpsertEventForm } from "@/app/components/UpsertEventForm";
import { UpsertEventFormData } from "@/app/components/UpsertEventForm/UpsertEventForm.typings";
import { useCalendarStore } from "@/app/stores";
import { useCreateEvent } from "@/db/hooks";

import { CreateEventFormFeatureProps } from "./CreateEventFormFeature.typings";

export const CreateEventFormFeature: FC<CreateEventFormFeatureProps> = ({ onCreated }) => {
  const calendarId = useCalendarStore((state) => state.data.id);

  const { mutateAsync: createEvent, isPending: isCreating } = useCreateEvent();

  const handleSubmit = useCallback(async (values: UpsertEventFormData) => {
    const newEvent = await createEvent({ data: { calendarId, ...values, } });
    if (newEvent) {
      useCalendarStore.setState((prev) => ({ events: [...prev.events, newEvent] }));
      onCreated?.();
    }

  }, [calendarId, createEvent, onCreated]);

  return (
    <UpsertEventForm type="create" isButtonLoading={isCreating} onSubmit={handleSubmit} />
  );
};
