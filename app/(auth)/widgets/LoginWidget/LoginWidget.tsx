import { FC } from "react";
import { AuthEntity } from "slices/auth/entities";
import { LoginFormFeature } from "slices/auth/features";
import { AuthTypeLink } from "slices/auth/ui";

export const LoginWidget: FC = () => {
  return (
    <AuthEntity
      bottomNode={
        <AuthTypeLink href="/signup">Зарегистрироваться</AuthTypeLink>
      }
      title="Авторизация"
      form={<LoginFormFeature />}
    />
  );
};
