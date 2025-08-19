import { PetCreateParams } from "@/core/domain/entities/pets/PetCreateParams";
import { Action } from "../common/Action";
import { Pet } from "@/core/domain/entities/pets/Pet";
import { PetRepository } from "@/core/domain/repositories/PetRepository";


export class CreatePetAction implements Action<PetCreateParams, Pet> {
  constructor(
    private readonly petRepository: PetRepository
  ) { }
  execute(params: PetCreateParams): Promise<Pet> {
    return this.petRepository.create(params);
  }
}