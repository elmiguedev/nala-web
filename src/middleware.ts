// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getSessionFromCookie } from "./helpers/auth/AuthUtils";

const PUBLIC_ROUTES = ["/login", "/register", "/api/auth/login", "/api/auth/register", "/api/auth/google"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // permitir si es pública
  if (PUBLIC_ROUTES.includes(pathname)) return NextResponse.next();

  // 🔒 buscar token en cookies (porque localStorage no está disponible del lado del server)
  const token = await getSessionFromCookie();

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|img).*)"],
};