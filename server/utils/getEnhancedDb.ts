import { AuthUser, enhance } from "@zenstackhq/runtime";

import db from "@/db";

import { getSession } from "./getSession";

/* Создает клиент Призмы, который знает о текущем пользователе */
export async function getEnhancedDb() {
  const session = await getSession();

  return enhance(db, { user: session?.user as unknown as AuthUser });
}
