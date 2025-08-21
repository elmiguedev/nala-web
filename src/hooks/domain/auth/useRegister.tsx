
import { AuthRegisterParams } from "@/core/domain/entities/auth/AuthRegisterParams";
import { useState } from "react";

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const url = "/api/auth/register";

  const register = async (params: AuthRegisterParams) => {
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