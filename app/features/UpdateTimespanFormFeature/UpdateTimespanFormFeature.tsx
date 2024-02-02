"use client";
import { FC, useCallback } from "react";

import { UpsertTimespanForm } from "@/app/components/UpsertTimespanForm";
import { UpsertTimespanFormData } from "@/app/components/UpsertTimespanForm/UpsertTimespanForm.typings";
import { useCalendarStore } from "@/app/stores";
import { updateTimespan } from "@/app/stores/calendar/actions/updateTimespan";
import { getIndexedTimespan } from "@/app/stores/calendar/utils";
import { useUpdateTimespan } from "@/db/hooks";

import { UpdateTimespanFormFeatureProps } from "./UpdateTimespanFormFeature.typings";

export const UpdateTimespanFormFeature: FC<UpdateTimespanFormFeatureProps> = ({
  onUpdated,
  timespan,
}) => {
  const startDate = useCalendarStore((state) => state.data.startDate);

  const { mutateAsync: updateTimespanMutation, isPending } =
    useUpdateTimespan();

  const handleSubmit = useCallback(
    async (values: UpsertTimespanFormData) => {
      const newTimespan = await updateTimespanMutation({
        where: {
          id: timespan.id,
        },
        data: {
          ...values,
        },
      });
      if (newTimespan) {
        const indexedTimespan = getIndexedTimespan(newTimespan, startDate);
        updateTimespan(indexedTimespan);
        onUpdated?.();
      }
    },
    [onUpdated, startDate, timespan.id, updateTimespanMutation]
  );

  return (
    <UpsertTimespanForm
      type="update"
      timespan={timespan}
      isButtonLoading={isPending}
      onSubmit={handleSubmit}
    />
  );
};
