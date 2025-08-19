
import { PetRepository } from "@/core/domain/repositories/PetRepository";
import { NalaApiConnector } from "../connector/NalaApiConnector";
import { CreatePetResponse } from "../dtos/pets/CreatePetResponse";
import { PetCreateParams } from "@/core/domain/entities/pets/PetCreateParams";
import { Pet } from "@/core/domain/entities/pets/Pet";

export class NalaApiPetRepository implements PetRepository {
  private connector: NalaApiConnector = new NalaApiConnector();

  public async create(pet: PetCreateParams): Promise<Pet> {
    const response: CreatePetResponse = await this.connector.createPet(pet);
    return response as Pet;
  }
  public getAll(): Promise<Pet[]> {
    return this.connector.getPets();
  }

  public getById(id: string): Promise<Pet> {
    return this.connector.getPet(id);
  }


}