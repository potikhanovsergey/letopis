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

import { SignupFormFeatureProps } from "./SignupFormFeature.typings";

export const SignupFormFeature: FC<SignupFormFeatureProps> = ({
  createUserAction,
}) => {
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
      await createUserAction(values);
      await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      router.push("/");
    } catch (err: any) {
      if (err.status === 401) {
        form.setFieldError("email", "Введены неправильные почта и/или пароль");
      } else {
        const message =
          err.info?.prisma && err.info?.code === "P2002"
            ? "Пользователь с такой почтой уже существует"
            : "Что-то пошло не так при регистрации. Попробуйте снова.";

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
      <AuthSubmitButton loading={loading}>Зарегистрироваться</AuthSubmitButton>
    </form>
  );
};
