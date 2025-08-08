import ActionProvider from "@/core/providers/ActionProvider";
import { saveSession } from "@/helpers/auth/AuthUtils";

export const POST = async (request: Request) => {
  const body = await request.json();
  const action = ActionProvider.register;
  const tokenResponse = await action.execute(body);
  await saveSession(tokenResponse);
  return new Response();
}