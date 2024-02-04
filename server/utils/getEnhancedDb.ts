import { AuthUser, enhance } from "@zenstackhq/runtime";

import prisma from "@/db";

import { getSession } from "./getSession";

/* Создает клиент Призмы, который знает о текущем пользователе */
export async function getEnhancedDb() {
  const session = await getSession();

  return enhance(prisma, { user: session?.user as unknown as AuthUser });
}
