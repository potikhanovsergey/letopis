import { FC } from "react";
import { TextInput, TextInputProps } from "@mantine/core";

export const AuthEmailInput: FC<TextInputProps> = (props) => {
  return (
    <TextInput
      label="E-mail"
      placeholder="Введите электронную почту"
      {...props}
    />
  );
};
