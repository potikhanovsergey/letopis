import { AuthValues } from "slices/auth/typings";
import { z, ZodType } from "zod";

export const credentialsSchema: ZodType<AuthValues> = z.object({
  email: z.string().email({ message: "Неправильный формат почты" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать хотя бы 6 символов" }),
});
