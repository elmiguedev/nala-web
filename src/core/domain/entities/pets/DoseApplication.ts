export interface DoseApplication {
  id: string;
  petId: string;
  date: Date;
  name: string;              // ej: "Rabies Vaccine", "Ivermectin"
  type: string;              // ej: "vaccine", "deworming", "pipette"
  amount?: number;           // ej: 1, 0.5
  unit?: string;             // ej: "ml", "tablet", "pipette"
  notes?: string;

  // Próximos pasos
  nextDate?: Date;  // recordatorio próxima dosis

  // Contexto del lugar
  clinic?: string;             // dónde se aplicó
  veterinarian?: string;       // quién la aplicó (opcional)

  createdAt: Date;
  updatedAt: Date;
}