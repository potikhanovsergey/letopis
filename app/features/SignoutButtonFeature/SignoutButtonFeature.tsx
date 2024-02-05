import { FC, useCallback } from "react";
import { MenuItem } from "@mantine/core";
import { signOut } from "next-auth/react";

export const SignoutButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    signOut({ redirect: true, callbackUrl: "/" });
  }, []);

  return (
    <MenuItem color="red" onClick={handleClick}>
      Выйти из аккаунта
    </MenuItem>
  );
};
