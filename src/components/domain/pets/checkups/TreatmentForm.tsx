export type TreatmentType =
  | "Vacuna" | "Antirrábica" | "Desparasitación" | "Baño antipulgas"
  | "Control general" | "Otro";

export interface Treatment {
  id: string;
  petId: string;
  type: TreatmentType;
  description?: string;
  dateDone: string;          // fecha realizada (ISO)
  nextDate?: string;         // próxima (si aplica)
  clinicName?: string;       // opcional
  batchOrLot?: string;       // lote de vacuna (opcional)
  costArs?: number;          // opcional
  attachments?: string[];    // URLs/ids de archivos (foto del carnet, etc.)
  createdAt: string;
  updatedAt: string;
}

import { useState } from "react";

export function TreatmentForm({ defaultValues, onSubmit, onCancel }: {
  defaultValues?: Partial<Treatment>;
  onSubmit: (data: Partial<Treatment>) => void;
  onCancel: () => void;
}) {
  const [type, setType] = useState<TreatmentType>(defaultValues?.type ?? "Vacuna");
  const [dateDone, setDateDone] = useState<string>(defaultValues?.dateDone ?? new Date().toISOString());
  const [nextDate, setNextDate] = useState<string | undefined>(defaultValues?.nextDate);
  const [description, setDescription] = useState(defaultValues?.description ?? "");
  const [clinicName, setClinicName] = useState(defaultValues?.clinicName ?? "");
  const [batchOrLot, setBatchOrLot] = useState(defaultValues?.batchOrLot ?? "");
  const [costArs, setCostArs] = useState<number | undefined>(defaultValues?.costArs);

  return (
    <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); onSubmit({ type, dateDone, nextDate, description, clinicName, batchOrLot, costArs }); }}>
      <label className="form-control">
        <span className="label-text font-medium">Tipo</span>
        <select className="select select-bordered" value={type} onChange={(e) => setType(e.target.value as TreatmentType)}>
          <option>Vacuna</option>
          <option>Antirrábica</option>
          <option>Desparasitación</option>
          <option>Baño antipulgas</option>
          <option>Control general</option>
          <option>Otro</option>
        </select>
      </label>

      <div className="grid sm:grid-cols-2 gap-3">
        <label className="form-control">
          <span className="label-text font-medium">Fecha realizada</span>
          <input type="date" className="input input-bordered" value={dateDone} onChange={(e) => setDateDone(e.target.value)} />
        </label>
        <label className="form-control">
          <span className="label-text font-medium">Próxima (opcional)</span>
          <input type="date" className="input input-bordered" value={nextDate ?? ""} onChange={(e) => setNextDate(e.target.value || undefined)} />
        </label>
      </div>

      <label className="form-control">
        <span className="label-text font-medium">Descripción</span>
        <textarea className="textarea textarea-bordered" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <div className="grid sm:grid-cols-3 gap-3">
        <label className="form-control">
          <span className="label-text font-medium">Clínica (opcional)</span>
          <input className="input input-bordered" value={clinicName} onChange={(e) => setClinicName(e.target.value)} />
        </label>
        <label className="form-control">
          <span className="label-text font-medium">Lote (opcional)</span>
          <input className="input input-bordered" value={batchOrLot} onChange={(e) => setBatchOrLot(e.target.value)} />
        </label>
        <label className="form-control">
          <span className="label-text font-medium">Costo ARS (opcional)</span>
          <input type="number" min={0} className="input input-bordered" value={costArs ?? ""} onChange={(e) => setCostArs(e.target.value ? Number(e.target.value) : undefined)} />
        </label>
      </div>

      <div className="flex justify-end gap-2 mt-2">
        <button type="button" className="btn btn-ghost" onClick={onCancel}>Cancelar</button>
        <button className="btn btn-primary">Guardar</button>
      </div>
    </form>
  );
}