import { FC, useCallback } from "react";
import { Button } from "@mantine/core";
import { signOut } from "next-auth/react";

export const SignoutButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    signOut({ redirect: true, callbackUrl: "/" });
  }, []);

  return <Button onClick={handleClick}>Выйти из аккаунта</Button>;
};
