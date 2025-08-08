import ActionProvider from "@/core/providers/ActionProvider";
import { saveSession } from "@/helpers/auth/AuthUtils";

export const POST = async (request: Request) => {
  console.log()
  console.log(">> entra a la api")
  console.log()

  const body = await request.json();

  console.log()
  console.log(">> google body", body),
    console.log()


  const action = ActionProvider.googleLogin;
  const tokenResponse = await action.execute(body);

  console.log()
  console.log(">> google token response", tokenResponse)
  console.log()

  await saveSession(tokenResponse);
  return new Response();
}