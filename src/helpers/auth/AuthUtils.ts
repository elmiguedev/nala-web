import { cookies } from "next/headers";
import { AuthTokenResponse } from "@/core/domain/auth/AuthTokenResponse";

const saveSession = async (tokenResponse: AuthTokenResponse) => {
  const data = JSON.stringify(tokenResponse);
  const c = await cookies();
  c.set("auth", data, {
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "lax",
  });

  return new Response();
}

const clearSession = async () => {
  const c = await cookies();
  c.delete("auth");

  return new Response();
}

const getSessionFromCookie = async () => {
  const c = await cookies();
  const data = c.get("auth")?.value;
  return data ? JSON.parse(data) : null;
}

export {
  saveSession,
  clearSession,
  getSessionFromCookie
}