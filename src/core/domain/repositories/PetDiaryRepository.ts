import { PetDiaryEvent } from "../entities/pets/PetDiary";

export interface PetDiaryRepository {
  get(params: any): Promise<PetDiaryEvent[]>
}