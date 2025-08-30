import { useState, useMemo } from "react";
import { PetCheckup } from "@/core/domain/entities/pets/PetCheckup";
import { toDateFormat } from "@/utils/DateUtils";
import NalitaCard from "@/components/ui/cards/NalitaCard";

export interface CheckupItemProps {
  checkup: PetCheckup;
  onDetails?: (checkup: PetCheckup) => void;
};

export default function CheckupItem({ checkup, onDetails }: CheckupItemProps) {

  return (
    <NalitaCard>
      <div className="flex items-start justify-between gap-3">
        <CheckupHeader checkup={checkup} />
        <CheckupDetailButton checkup={checkup} onDetails={onDetails} />
      </div>
      <CheckupMeta checkup={checkup} />
    </NalitaCard>
  );
}

function CheckupDate({ checkup }: CheckupItemProps) {
  return (
    <div className="text-sm text-black/60 mb-1">{toDateFormat(checkup.date)}</div>
  );
}

function CheckupTitle({ checkup }: CheckupItemProps) {
  return (
    <h3 className="text-lg font-semibold tracking-tight">
      {checkup.reason}
    </h3>
  );
}

function CheckupDetailButton({ checkup, onDetails }: CheckupItemProps) {
  return (
    <button
      type="button"
      onClick={() => onDetails?.(checkup)}
      className="inline-flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 text-sm font-medium hover:bg-black/5 active:scale-[0.99] transition cursor-pointer"
      aria-haspopup="dialog"
      aria-controls={`checkup-dialog-${checkup.id}`}
    >
      Ver detalle
    </button>
  );
}

function CheckupHeader({ checkup }: CheckupItemProps) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <CheckupDate checkup={checkup} />
        <CheckupTitle checkup={checkup} />
      </div>
    </div>
  );
}

function CheckupMeta({ checkup }: CheckupItemProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
      {checkup.clinic && (
        <div className="flex items-center gap-2">
          <span className="font-medium">Clínica:</span>
          <span className="text-black/80">{checkup.clinic}</span>
        </div>
      )}

      {typeof checkup.weight === "number" && (
        <div className="flex items-center gap-2">
          <span className="font-medium">Peso:</span>
          <span className="text-black/80">{checkup.weight} kg</span>
        </div>
      )}
    </div>
  );
}