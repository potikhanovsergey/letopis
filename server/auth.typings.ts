import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  /**
   * Возвращается из `useSession`, `getSession` и передается в `SessionProvider`
   */
  interface Session {
    user: AdapterUser;
  }
}
