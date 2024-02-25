import { Timespan } from "@prisma/client";

export interface UpsertTimespanFormProps {
  timespan?: Partial<Timespan>;
  type: "create" | "update";
  onSubmit: (data: UpsertTimespanFormData) => void;
  isButtonLoading?: boolean;
}

export interface UpsertTimespanFormData {
  title: string;
  startDate: Date;
  endDate: Date;
  color: string;
  referenceLink: string;
}
