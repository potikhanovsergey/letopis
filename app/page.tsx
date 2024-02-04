import { FC } from "react";
import { Container, Stack } from "@mantine/core";

import { CurrentUserCalendarsFeature } from "@/app/features/CurrentUserCalendarsFeature";

import { UserBookmarksFeature } from "./features/UserBookmarksFeature";

const HomePage: FC = async () => {
  return (
    <Container>
      <Stack gap="xl">
        <CurrentUserCalendarsFeature />
        <UserBookmarksFeature />
      </Stack>
    </Container>
  );
};

export default HomePage;
