"use client";
import { FC, useCallback } from "react";
import { Box, createPolymorphicComponent } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";

const SignoutButtonFeatureBase: FC = (props) => {
  const handleClick = useCallback(() => {
    signOut({ redirect: true, callbackUrl: "/" });
  }, []);

  const session = useSession();

  if (!session.data) return null;

  return (
    <Box component="button" {...props} color="red" onClick={handleClick}>
      Выйти из аккаунта
    </Box>
  );
};

export const SignoutButtonFeature = createPolymorphicComponent<"button", {}>(
  SignoutButtonFeatureBase
);
