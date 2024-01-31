import { Event } from "@prisma/client";

export interface UpsertEventFormProps {
  event?: Partial<Event>;
  type: "create" | "update"
  onSubmit: (data: UpsertEventFormData) => void;
  isButtonLoading?: boolean;
}

export interface UpsertEventFormData {
  title: string;
  date: Date;
  icon: string;
}