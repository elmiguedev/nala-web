export type PetTreatmentType = "Vacuna" | "Antirrabica" | "Desparasitacion" | "Baño antipulgas" | "Control general" | "Otro";

export interface PetTreatment {
  id: string;
  petId: string;
  type: PetTreatmentType;
  date: Date;
  title: string;
  description?: string;
  clinicName?: string;
  batchOrLot?: string;
  dosis?: string;
  petWeight?: number;
  cost?: number;
  attachments?: string[];
  createdAt: Date;
  updatedAt: Date;
}