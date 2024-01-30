import { FC } from "react";

import { CurrentUserCalendarsFeature } from "@/app/features/CurrentUserCalendarsFeature";

const HomePage: FC = async () => {
  return (
    <>
      <CurrentUserCalendarsFeature />
    </>
  );
};

export default HomePage;
