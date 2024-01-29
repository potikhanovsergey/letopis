"use client";
import { FC } from "react";
import { Stack } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AuthValues } from "slices/auth/typings";
import {
  AuthEmailInput,
  AuthPasswordInput,
  AuthSubmitButton,
} from "slices/auth/ui";
import { credentialsSchema } from "slices/auth/validators";

export const LoginFormFeature: FC = () => {
  const form = useForm<AuthValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(credentialsSchema),
  });

  const [loading, { open: startLoading, close: endLoading }] = useDisclosure();
  const router = useRouter();

  const handleSubmit = form.onSubmit(async (values) => {
    startLoading();
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (!response?.ok) throw response;

      router.push("/");
    } catch (err: any) {
      if (err.status === 401) {
        form.setFieldError("email", "Введены неправильные почта и/или пароль");
      } else {
        const message =
          "Что-то пошло не так при авторизации. Попробуйте снова.";

        form.setFieldError("email", message);
      }
    } finally {
      endLoading();
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <AuthEmailInput {...form.getInputProps("email")} />
        <AuthPasswordInput {...form.getInputProps("password")} />
      </Stack>
      <AuthSubmitButton loading={loading}>Войти в аккаунт</AuthSubmitButton>
    </form>
  );
};
