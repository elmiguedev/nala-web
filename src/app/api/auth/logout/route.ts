import ActionProvider from "@/core/providers/ActionProvider";
import { clearSession, saveSession } from "@/helpers/auth/AuthUtils";

export const POST = async (request: Request) => {
  await clearSession();
  return new Response();
}