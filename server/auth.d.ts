import { User } from "@prisma/client";

declare module "next-auth" {
  /**
   * Возвращается из `useSession`, `getSession` и передается в `SessionProvider`
   */
  interface Session {
    user: Omit<User, "password">;
  }
}
