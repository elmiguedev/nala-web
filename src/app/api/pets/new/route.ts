import ActionProvider from "@/core/providers/ActionProvider";
import { saveSession } from "@/helpers/auth/AuthUtils";

export const POST = async (request: Request) => {
  const body = await request.json();

  console.log(">> entra a la api del create pet", body)

  const action = ActionProvider.createPet;
  const pet = await action.execute(body);

  return new Response(JSON.stringify(pet));
}