'use client'

import { Pet } from "@/core/domain/entities/pets/Pet";
import { createContext, useContext } from "react";

export const PetContext = createContext<Pet | null>(null);

export function PetProvider({ children, pet }: { children: React.ReactNode, pet: Pet }) {
  return (
    <PetContext.Provider value={pet}>
      {children}
    </PetContext.Provider>
  );
}

export const usePetContext = () => {
  return useContext(PetContext);
}