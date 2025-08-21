import { Metadata } from "@/core/domain/entities/common/Metadata";
import { PetType } from "@/core/domain/entities/pets/PetType";

export interface CreatePetResponse {
  id: string;
  name: string;
  type: PetType;
  ownerId: string;
  birthdate: Date;
  metadata?: Metadata;
}