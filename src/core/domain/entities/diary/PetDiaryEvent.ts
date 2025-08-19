export interface PetDiaryEvent {
  id: string;
  petId: string;
  title: string;
  description: string;
  date: Date;
  canceled: boolean;
}