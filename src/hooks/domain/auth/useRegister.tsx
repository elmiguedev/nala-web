import { AuthRegistrationParams } from "@/core/domain/auth/AuthRegistrationParams";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const url = "/api/auth/register";

  const register = async (params: AuthRegistrationParams) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      if (!response.ok) {
        throw new Error("Register failed");
      }
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }


  };

  return {
    register,
    loading
  }
}