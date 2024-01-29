import { getEnhancedDb } from "server/utils/getEnhancedDb";
import { AuthValues } from "slices/auth/typings";

export async function createUser({ email, password }: AuthValues) {
  "use server";

  const db = await getEnhancedDb();

  await db.user.create({
    data: { email, password },
  });
}
