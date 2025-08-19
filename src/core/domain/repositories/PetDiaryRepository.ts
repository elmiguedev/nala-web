import { PetDiaryEvent } from "../entities/diary/PetDiaryEvent";
import { PetDiaryQueryParams } from "../entities/diary/PetDiaryQueryParams";

export interface PetDiaryRepository {
  get(params: PetDiaryQueryParams): Promise<PetDiaryEvent[]>
}