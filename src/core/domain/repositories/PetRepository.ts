import { Pet } from "../entities/pets/Pet";
import { PetCreateParams } from "../entities/pets/PetCreateParams";

export interface PetRepository {
  create(pet: PetCreateParams): Promise<Pet>;
  getAll(): Promise<Pet[]>
  getById(id: string): Promise<Pet>
}