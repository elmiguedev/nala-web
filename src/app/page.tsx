import { requireAuth } from "@/helpers/auth/requireAuth";
import { getServerSession } from "next-auth";
import LogoutButton from "../components/LogoutButton";
import { authOptions } from "@/helpers/auth/authOptions";
import TestButton from "@/components/TestButton";

export default async function AppPage() {
  await requireAuth();
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div>
      <h1>Home s</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
      <TestButton />
    </div>
  );
}