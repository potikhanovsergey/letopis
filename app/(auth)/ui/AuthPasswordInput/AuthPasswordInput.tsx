import { FC } from "react";
import { PasswordInput, PasswordInputProps } from "@mantine/core";

export const AuthPasswordInput: FC<PasswordInputProps> = (props) => {
  return (
    <PasswordInput label="Пароль" placeholder="Введите пароль" {...props} />
  );
};
