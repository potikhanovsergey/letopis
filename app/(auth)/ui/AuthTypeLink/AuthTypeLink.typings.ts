import { Route } from "next";
import { LinkProps } from "next/link";

export interface AuthTypeLinkProps {
  /** Текст ссылки */
  children: string;
  /** Ссылка */
  href: LinkProps<Route>["href"];
}
