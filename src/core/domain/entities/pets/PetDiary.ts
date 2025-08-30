import { PetDiaryStatus } from "./PetDiaryStatus";
import { PetDiaryType } from "./PetDiaryType";

export type PetDiarySourceType = "VetVisit" | "Treatment" | "DoseApplication";


export interface PetDiaryEvent {
  id: string;
  petId: string;
  type: PetDiaryType; // podria ser dinamico por si el user quiere cambiar, pero que la app tome por defecto checkup y dose
  title: string;                      // título a mostrar ("Revacunación DHPPi")
  notes?: string;
  date: Date;
  status?: PetDiaryStatus;             // estado del evento
  createdAt: Date;
  updatedAt: Date;
}
