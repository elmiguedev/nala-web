'use client'

import Checkups from "@/components/domain/pets/checkups/CheckupList";
import DoseApplications from "@/components/domain/pets/checkups/DoseApplications";
import { DoseApplication } from "@/core/domain/entities/pets/DoseApplication";
import { PetCheckup } from "@/core/domain/entities/pets/PetCheckup";

export default function Page() {

  const checkups: PetCheckup[] = [
    { id: "1", petId: "1", date: new Date("2023-01-01"), reason: "Consulta lagañas", weight: 8.3, notes: "", clinic: "Ancora", veterinarian: "", createdAt: new Date(), updatedAt: new Date() },
    { id: "2", petId: "1", date: new Date("2023-02-01"), reason: "Colocación de vacuna", weight: 10, notes: "", clinic: "Ancora", veterinarian: "", createdAt: new Date(), updatedAt: new Date() }
  ];

  const applications: DoseApplication[] = [
    { id: "1", name: "Vitaminas", type: "Vitaminas", amount: 10, unit: "ml", petId: "1", date: new Date("2023-01-01"), notes: "", clinic: "Ancora", veterinarian: "", createdAt: new Date(), updatedAt: new Date() },
    { id: "2", name: "Vacuna antirrabica", type: "Vacuna", petId: "1", date: new Date("2023-02-01"), notes: "", clinic: "Ancora", veterinarian: "", createdAt: new Date(), updatedAt: new Date() },
    { id: "3", name: "Vacuna", type: "Vacuna", petId: "1", date: new Date("2023-03-01"), notes: "", clinic: "Ancora", veterinarian: "", createdAt: new Date(), updatedAt: new Date() }
  ]

  return (
    <div className="flex flex-col gap-4">
      <DoseApplications applications={applications} />
    </div>
  );
}