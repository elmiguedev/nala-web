import { AuthLoginParams } from "@/core/domain/auth/AuthLoginParams";
import { CredentialResponse } from "@react-oauth/google";
import { useState } from "react";

export default function useGoogleLogin() {
  const [loading, setLoading] = useState(false);
  const url = "/api/auth/google";

  const googleLogin = async (params: any) => {
    try {
      setLoading(true);

      console.log()
      console.log(">> entra al hook", params)
      console.log()

      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }

    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }


  };

  return {
    googleLogin,
    loading
  }
}