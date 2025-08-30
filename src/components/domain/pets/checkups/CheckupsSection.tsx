'use client'

import NalitaSectionTitle from "@/components/ui/titles/NalitaSectionTitle";
import { PetCheckup } from "@/core/domain/entities/pets/PetCheckup";
import CheckupList from "./CheckupList";

export interface CheckupsSectionProps {
  checkups: PetCheckup[]
}

export default function CheckupsSection(props: CheckupsSectionProps) {
  const { checkups } = props;
  return (
    <div className="flex flex-col gap-4">
      <NalitaSectionTitle title="Checkups" />
      <CheckupList checkups={checkups} />
    </div>
  );
}