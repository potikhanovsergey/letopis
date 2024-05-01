import { FC } from "react";
import { List as MantineList, ListItem, Text } from "@mantine/core";

import { ListProps } from "./List.typings";

export const List: FC<ListProps> = ({ items, title }) => {
  return (
    <div>
      <Text size="sm" fw="bold">
        {title}
      </Text>
      <MantineList size="sm" type="unordered">
        {items.map((item) => (
          <ListItem icon={item.icon} key={item.id}>
            {item.title}
          </ListItem>
        ))}
      </MantineList>
    </div>
  );
};
