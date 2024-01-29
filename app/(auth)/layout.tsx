import { FC, PropsWithChildren } from "react";
import { Container } from "@mantine/core";
import { redirect } from "next/navigation";
import { getSession } from "server/utils";

const AuthLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getSession();

  if (session) redirect("/");

  return (
    <Container size="xs" pt={120}>
      {children}
    </Container>
  );
};

export default AuthLayout;
