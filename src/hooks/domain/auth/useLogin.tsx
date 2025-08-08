import { AuthLoginParams } from "@/core/domain/auth/AuthLoginParams";
import { useState } from "react";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const url = "/api/auth/login";

  const login = async (params: AuthLoginParams) => {
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
    login,
    loading
  }
}