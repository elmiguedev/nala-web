import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import DevUtils from "@/utils/DevUtils";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always redirect to the home page after login
      return baseUrl; // This will redirect to the base URL, effectively your home page
      // Or, to a specific page like '/dashboard':
      // return baseUrl + '/dashboard';
    },
    // Se ejecuta en el sign-in (una vez Google validó):
    async signIn({ profile }) {
      if (!profile?.email) return false; // sin email, no lo dejamos pasar
      return true;
    },

    // Guardá en el JWT el userId de TU API (no el de Google)
    async jwt({ token, trigger, account, profile }) {
      // Solo la primera vez (o cuando quieras refrescar datos)
      if (trigger === "signIn" && profile?.email) {
        try {
          // 1. llamo a la accion para obtene r usuario por mail
          const user = {
            email: profile.email,
            name: "migue",
            id: 1
          }

          // 2. le meto el user id en el token
          token.userId = user.id;

          // const user = await upsertUserInApi({
          //   email: profile.email,
          //   name: (profile as any).name ?? (profile as any).given_name ?? "",
          //   image: (profile as any).picture ?? null,
          // });
          // token.userId = user.id; // <-- ID de TU API
          // // también podrías guardar roles/permisos si los tenés
          // // token.roles = user.roles;
          return token
        } catch (e) {
          console.error("jwt upsert error:", e);
        }
      }
      return token;
    },

    // Exponer en la sesión lo que pusiste en el token
    async session({ session, token }) {
      if (session.user && token.userId) {
        (session.user as any).id = token.userId; // ahora tenés session.user.id
      }
      // if (token.roles) (session.user as any).roles = token.roles;
      return session;
    },
  },
};
