import { ButtonHTMLAttributes, FC } from "react";
import { Button, ButtonProps } from "@mantine/core";

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const AuthSubmitButton: FC<Props> = (props) => {
  return <Button type="submit" fullWidth mt="lg" {...props} />;
};
