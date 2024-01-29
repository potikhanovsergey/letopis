import { FC } from "react";
import { createUser } from "slices/auth/api";
import { AuthEntity } from "slices/auth/entities";
import { SignupFormFeature } from "slices/auth/features";
import { AuthTypeLink } from "slices/auth/ui";

export const SignupWidget: FC = () => {
  return (
    <AuthEntity
      bottomNode={<AuthTypeLink href="/login">Войти в аккаунт</AuthTypeLink>}
      title="Регистрация"
      form={<SignupFormFeature createUserAction={createUser} />}
    />
  );
};
