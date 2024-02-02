"use client";
import { FC, useCallback } from "react";

import { UpsertTimespanForm } from "@/app/components/UpsertTimespanForm";
import { UpsertTimespanFormData } from "@/app/components/UpsertTimespanForm/UpsertTimespanForm.typings";
import { useCalendarStore } from "@/app/stores";
import { addTimespan } from "@/app/stores/calendar/actions";
import { getIndexedTimespan } from "@/app/stores/calendar/utils";
import { useCreateTimespan } from "@/db/hooks";

import { CreateTimespanFormFeatureProps } from "./CreateTimespanFormFeature.typings";

export const CreateTimespanFormFeature: FC<CreateTimespanFormFeatureProps> = ({
  onCreated,
}) => {
  const calendarId = useCalendarStore((state) => state.data.id);
  const startDate = useCalendarStore((state) => state.data.startDate);

  const { mutateAsync: createTimespan, isPending } = useCreateTimespan();

  const handleSubmit = useCallback(
    async (values: UpsertTimespanFormData) => {
      const newTimespan = await createTimespan({
        data: { calendarId, ...values },
      });

      if (newTimespan) {
        const indexedTimespan = getIndexedTimespan(newTimespan, startDate);
        addTimespan(indexedTimespan);
        onCreated?.();
      }
    },
    [calendarId, createTimespan, onCreated, startDate]
  );

  return (
    <UpsertTimespanForm
      type="create"
      isButtonLoading={isPending}
      onSubmit={handleSubmit}
    />
  );
};
