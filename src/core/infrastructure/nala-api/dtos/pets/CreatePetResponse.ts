import { Metadata } from "@/core/domain/common/Metadata";
import { PetType } from "@/core/domain/pets/PetType";

export interface CreatePetResponse {
  id: string;
  name: string;
  type: PetType;
  ownerId: string;
  birthdate: Date;
  metadata?: Metadata;
}