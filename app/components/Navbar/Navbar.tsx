import { FC } from "react";
import { AppShellNavbar, AppShellSection, Button, Stack } from "@mantine/core";

import { CreateCalendarFeature } from "@/app/features/CreateCalendarFeature";
import { RouteListenerFeature } from "@/app/features/RouteListenerFeature";
import { SignoutButtonFeature } from "@/app/features/SignoutButtonFeature";

export const Navbar: FC = () => {
  return (
    <AppShellNavbar p="md">
      <AppShellSection>
        <Stack gap={4}>
          <CreateCalendarFeature />
          <SignoutButtonFeature component={Button} />
        </Stack>
      </AppShellSection>
      <RouteListenerFeature />
    </AppShellNavbar>
  );
};
