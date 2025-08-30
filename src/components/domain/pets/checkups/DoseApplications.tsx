import NalitaButton from "@/components/ui/buttons/NalitaButton";
import NalitaCard from "@/components/ui/cards/NalitaCard";
import { DoseApplication } from "@/core/domain/entities/pets/DoseApplication";
import DoseApplicationItem from "./DoseApplicationItem";

export interface DoseApplicationsProps {
  applications: DoseApplication[]
}

export default function DoseApplications(props: DoseApplicationsProps) {
  const { applications } = props;
  return (
    <NalitaCard
      title="Aplicaciones 🧪"
      actionSlot={
        <NalitaButton size="small" label="+ Nueva aplicación" variant="primary" />
      }
    >
      {applications.map(application => (
        <DoseApplicationItem application={application} key={application.id} />
      ))}
    </NalitaCard>
  );

}