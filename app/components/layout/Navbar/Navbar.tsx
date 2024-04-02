import { FC } from "react";
import { AppShellNavbar, AppShellSection, Button, Stack } from "@mantine/core";

import { SignoutButtonFeature } from "@/app/features/auth";
import { CreateCalendarFeature } from "@/app/features/CreateCalendarFeature";
import { RouteListenerFeature } from "@/app/features/RouteListenerFeature";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <AppShellNavbar p="md">
      <AppShellSection>
        <Stack gap={4}>
          <CreateCalendarFeature />
          <Button component={Link} href="/">
            Календари
          </Button>
          <Button component={Link} href="/">
            О проекте
          </Button>
          <SignoutButtonFeature component={Button} />
        </Stack>
      </AppShellSection>
      <RouteListenerFeature />
    </AppShellNavbar>
  );
};
