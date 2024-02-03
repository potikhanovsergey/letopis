import { FC } from "react";
import { Container } from "@mantine/core";

import { CurrentUserCalendarsFeature } from "@/app/features/CurrentUserCalendarsFeature";

const HomePage: FC = async () => {
  return (
    <Container>
      <CurrentUserCalendarsFeature />
    </Container>
  );
};

export default HomePage;
