import CheckupsSection from "@/components/domain/pets/checkups/CheckupsSection";
import { PetCheckup } from "@/core/domain/entities/pets/PetCheckup";

export default function Page() {

  const checkups: PetCheckup[] = [
    { id: "1", petId: "1", date: new Date("2023-01-01"), reason: "Consulta lagañas", weight: 8.3, notes: "", clinic: "Ancora", veterinarian: "", createdAt: new Date(), updatedAt: new Date() },
    { id: "2", petId: "1", date: new Date("2023-02-01"), reason: "Colocación de vacuna", weight: 10, notes: "", clinic: "Ancora", veterinarian: "", createdAt: new Date(), updatedAt: new Date() }
  ];

  return (
    <CheckupsSection checkups={checkups} />
  );
}