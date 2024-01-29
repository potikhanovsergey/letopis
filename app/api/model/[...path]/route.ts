import { NextRequestHandler } from "@zenstackhq/server/next";
import { getEnhancedDb } from "server/utils/getEnhancedDb";

const handler = NextRequestHandler({
  getPrisma: getEnhancedDb,
  useAppDir: true,
});

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
