"use client";
import { FC, useCallback } from "react";
import { useSelector } from "@legendapp/state/react";

import { UpsertTimespanForm } from "@/app/components/UpsertTimespanForm";
import { UpsertTimespanFormData } from "@/app/components/UpsertTimespanForm/UpsertTimespanForm.typings";
import { calendarData$ } from "@/app/stores";
import { addTimespan } from "@/app/stores/calendar/actions";
import { useCreateTimespan } from "@/db/hooks";
import { addYear } from "@/app/utils/date";

import { CreateTimespanFormFeatureProps } from "./CreateTimespanFormFeature.typings";

export const CreateTimespanFormFeature: FC<CreateTimespanFormFeatureProps> = ({
  date,
  onCreated,
}) => {
  const calendarId = useSelector(calendarData$.id);

  const { mutateAsync: createTimespan, isPending } = useCreateTimespan();

  const handleSubmit = useCallback(
    async ({ referenceLink, ...values }: UpsertTimespanFormData) => {
      const newTimespan = await createTimespan({
        data: { calendarId, referenceLink: referenceLink || null, ...values },
      });

      if (newTimespan) {
        addTimespan(newTimespan);
        onCreated?.();
      }
    },
    [calendarId, createTimespan, onCreated]
  );

  return (
    <UpsertTimespanForm
      type="create"
      timespan={{ startDate: date, endDate: addYear(date) }}
      isButtonLoading={isPending}
      onSubmit={handleSubmit}
    />
  );
};
