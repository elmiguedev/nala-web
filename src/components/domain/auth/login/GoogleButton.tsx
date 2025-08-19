import GoogleIcon from "@/components/icons/GoogleIcon";
import NalitaButton from "@/components/ui/buttons/NalitaButton";
import useGoogleLogin from "@/hooks/domain/auth/useGoogleLogin";
import { useGoogleLogin as useGoogle } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export default function GoogleButton() {
  const { googleLogin, loading } = useGoogleLogin();
  const router = useRouter();
  const login = useGoogle({
    onSuccess: async (tokenResponse: any) => {
      await googleLogin(tokenResponse);
      router.push("/");
    },
    onError: () => {
      alert("Error al iniciar sesión con Google");
    },
  });

  return (
    <button className="btn btn-lg bg-[#6ec7a2] text-white">
      <GoogleIcon />
      Iniciar sesión con Google
    </button>
  )

}