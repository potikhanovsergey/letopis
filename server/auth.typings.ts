import { Bookmark } from "@prisma/client";
import { AdapterUser as AuthAdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  /**
   * Возвращается из `useSession`, `getSession` и передается в `SessionProvider`
   */
  interface Session {
    user: Omit<AdapterUser, "email"> & {
      bookmarks: Bookmark[];
    };
  }

  interface AdapterUser extends Omit<AuthAdapterUser, "email"> {
    email: string | null;
  }
}
