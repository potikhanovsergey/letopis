"use client";
import { FC, useCallback } from "react";

import { UpsertTimespanForm } from "@/app/components/UpsertTimespanForm";
import { UpsertTimespanFormData } from "@/app/components/UpsertTimespanForm/UpsertTimespanForm.typings";
import { updateTimespan } from "@/app/stores/calendar/actions/updateTimespan";
import { useUpdateTimespan } from "@/db/hooks";

import { UpdateTimespanFormFeatureProps } from "./UpdateTimespanFormFeature.typings";

export const UpdateTimespanFormFeature: FC<UpdateTimespanFormFeatureProps> = ({
  onUpdated,
  timespan,
}) => {
  const { mutateAsync: updateTimespanMutation, isPending } =
    useUpdateTimespan();

  const handleSubmit = useCallback(
    async ({ referenceLink, ...values }: UpsertTimespanFormData) => {
      const newTimespan = await updateTimespanMutation({
        where: {
          id: timespan.id,
        },
        data: {
          referenceLink: referenceLink || null,
          ...values,
        },
      });
      if (newTimespan) {
        updateTimespan(newTimespan);
        onUpdated?.();
      }
    },
    [onUpdated, timespan.id, updateTimespanMutation]
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
