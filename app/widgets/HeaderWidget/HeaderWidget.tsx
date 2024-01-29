import { FC } from "react";
import { HeaderEntity } from "app/entities";

import { UserIdWidget } from "..";

export const HeaderWidget: FC = () => {
  return (
    <HeaderEntity
      leftSection={<span>Лого</span>}
      rightSection={<UserIdWidget />}
    />
  );
};
