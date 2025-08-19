import { PetType } from "./PetType";

export interface PetCreateParams {
  name: string;
  type: PetType;
  imgUrl?: string;
  birthdate: Date;
}