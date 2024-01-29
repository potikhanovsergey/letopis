"use client";
import { FC, useCallback } from "react";
import {
  createPolymorphicComponent,
  UnstyledButton,
  UnstyledButtonProps,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const SignoutButtonFeatureBase: FC = (props) => {
  const router = useRouter();
  const session = useSession();

  const handleClick = useCallback(() => {
    signOut({ redirect: false });
    router.push("/login");
  }, [router]);

  if (!session.data) return null;

  return (
    <UnstyledButton onClick={handleClick} {...props}>
      Выйти из аккаунта
    </UnstyledButton>
  );
};

export const SignoutButtonFeature = createPolymorphicComponent<
  "button",
  UnstyledButtonProps
>(SignoutButtonFeatureBase);
