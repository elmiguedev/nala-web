import { PetCreateParams } from "@/core/domain/entities/pets/PetCreateParams";
import { useState } from "react";

export default function useCreatePet() {
  const [loading, setLoading] = useState(false);
  const url = "/api/pets/new";

  const createPet = async (params: PetCreateParams) => {
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
    createPet,
    loading
  }
}