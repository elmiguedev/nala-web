'use client'

import { PetCheckup } from "@/core/domain/entities/pets/PetCheckup";
import CheckupItem from "./CheckupItem";
import { NalitaDialog } from "@/components/ui/dialog/NalitaDialog";
import { useState } from "react";
import CheckupDetailDialog from "./CheckupDetailDialog";

export interface CheckupListProps {
  checkups: PetCheckup[]
}

export default function CheckupList(props: CheckupListProps) {
  const { checkups } = props;
  const [selectedCheckup, setSelectedCheckup] = useState<PetCheckup | undefined>(undefined);
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {checkups.map(checkup => (
        <CheckupItem checkup={checkup} key={checkup.id} />
      ))}
      <CheckupDetailDialog
        onClose={() => setDetailOpen(false)}
        open={detailOpen}
        checkup={selectedCheckup}
      />
    </div>
  );

}