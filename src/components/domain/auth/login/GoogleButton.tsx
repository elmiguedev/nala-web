'use client'

import GoogleIcon from "@/components/icons/GoogleIcon";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function GoogleButton() {
  const router = useRouter();

  const handleClick = () => {
    signIn("google")
  }

  return (
    <button className="btn btn-lg bg-[#6ec7a2] text-white" onClick={handleClick}>
      <GoogleIcon />
      Iniciar sesión con Google
    </button>
  )

}