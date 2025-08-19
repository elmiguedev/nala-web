import { Pet } from "@/core/domain/entities/pets/Pet";
import { Action } from "../common/Action";
import { PetRepository } from "@/core/domain/repositories/PetRepository";

export class GetPetsAction implements Action<void, Pet[]> {
  constructor(
    private readonly petRepository: PetRepository
  ) { }
  execute(): Promise<Pet[]> {
    return this.petRepository.getAll();
  }
}