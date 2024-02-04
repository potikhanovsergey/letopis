"use client";
import { FC, useCallback } from "react";
import { useSelector } from "@legendapp/state/react";

import { UpsertTimespanForm } from "@/app/components/UpsertTimespanForm";
import { UpsertTimespanFormData } from "@/app/components/UpsertTimespanForm/UpsertTimespanForm.typings";
import { calendarData$ } from "@/app/stores";
import { addTimespan } from "@/app/stores/calendar/actions";
import { useCreateTimespan } from "@/db/hooks";

import { CreateTimespanFormFeatureProps } from "./CreateTimespanFormFeature.typings";

export const CreateTimespanFormFeature: FC<CreateTimespanFormFeatureProps> = ({
  onCreated,
}) => {
  const calendarId = useSelector(calendarData$.id);

  const { mutateAsync: createTimespan, isPending } = useCreateTimespan();

  const handleSubmit = useCallback(
    async (values: UpsertTimespanFormData) => {
      const newTimespan = await createTimespan({
        data: { calendarId, ...values },
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
      isButtonLoading={isPending}
      onSubmit={handleSubmit}
    />
  );
};
