import { useState } from "react";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const url = "/api/auth/logout";

  const logout = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    logout,
    loading
  }
}