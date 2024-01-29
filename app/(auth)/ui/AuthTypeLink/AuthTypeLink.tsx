import { FC } from "react";
import { Anchor } from "@mantine/core";
import Link from "next/link";

import { AuthTypeLinkProps } from "./AuthTypeLink.typings";

export const AuthTypeLink: FC<AuthTypeLinkProps> = ({ children, href }) => {
  return (
    <Anchor component={Link} ta="center" href={href}>
      {children}
    </Anchor>
  );
};
