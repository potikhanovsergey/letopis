import { FC } from "react";
import { AppShellNavbar, AppShellSection, Button, Stack } from "@mantine/core";

import {
  AuthButtonFeature,
  ProfileButtonFeature,
  SignoutButtonFeature,
} from "@/app/features/auth";
import { CreateCalendarFeature } from "@/app/features/CreateCalendarFeature";
import { RouteListenerFeature } from "@/app/features/RouteListenerFeature";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <AppShellNavbar
      p="md"
      h="calc( 100dvh - var(--app-shell-header-offset, 0rem))"
    >
      <AppShellSection>
        <Stack gap={4}>
          <ProfileButtonFeature type="button" />
          <AuthButtonFeature />
          <CreateCalendarFeature />
          <Button component={Link} href="/">
            Календари
          </Button>
          <SignoutButtonFeature component={Button} />
        </Stack>
      </AppShellSection>
      <RouteListenerFeature />
    </AppShellNavbar>
  );
};
