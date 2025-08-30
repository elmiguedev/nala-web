import { NalitaDialog } from "@/components/ui/dialog/NalitaDialog";
import { PetCheckup } from "@/core/domain/entities/pets/PetCheckup";

export interface CheckupDetailDialogProps {
  checkup?: PetCheckup;
  open: boolean;
  onClose: () => void
}

export default function CheckupDetailDialog(props: CheckupDetailDialogProps) {
  const {
    checkup,
    open,
    onClose
  } = props;
  return (
    <NalitaDialog open={open} onClose={onClose} title={checkup?.reason}>
      <h3 className="font-bold text-lg">Detalles de la consulta</h3>
      {JSON.stringify(checkup)}
    </NalitaDialog>
  )
}
