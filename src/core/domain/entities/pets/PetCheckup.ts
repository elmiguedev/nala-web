export interface PetCheckup {
  id: string;
  petId: string;
  date: Date;
  reason: string;
  weight?: number;
  notes?: string;
  clinic?: string;
  veterinarian?: string;
  createdAt: Date;
  updatedAt: Date;
}