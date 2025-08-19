import { Pet } from "@/core/domain/entities/pets/Pet";
import { Action } from "../common/Action";
import { PetRepository } from "@/core/domain/repositories/PetRepository";

export class GetPetAction implements Action<string, Pet> {
  constructor(
    private readonly petRepository: PetRepository
  ) { }
  execute(id: string): Promise<Pet> {
    return this.petRepository.getById(id);
  }
}