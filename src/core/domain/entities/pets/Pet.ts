import type { Metadata } from "../common/Metadata.ts";
import type { PetType } from "./PetType";

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  ownerId: string;
  birthdate: Date;
  metadata?: Metadata;
}