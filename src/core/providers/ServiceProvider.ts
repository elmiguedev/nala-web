import { AuthRepository } from "../domain/repositories/AuthRepository";
import { PetRepository } from "../domain/repositories/PetRepository";
import { NalaApiAuthRepository } from "../infrastructure/nala-api/repositories/NalaApiAuthRepository";
import { NalaApiPetRepository } from "../infrastructure/nala-api/repositories/NalaApiPetRepository";

const g = globalThis as any;

export function getAuthRepository(): AuthRepository {
  if (!g._authRepository) {
    g._authRepository = new NalaApiAuthRepository();
  }
  return g._authRepository;
}

export function getPetRepository(): PetRepository {
  if (!g._petRepository) {
    g._petRepository = new NalaApiPetRepository();
  }
  return g._petRepository;
}

