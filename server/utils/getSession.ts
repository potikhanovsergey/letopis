import { getServerSession } from "next-auth";
import { authOptions } from "server/auth";

export const getSession = () => getServerSession(authOptions);
