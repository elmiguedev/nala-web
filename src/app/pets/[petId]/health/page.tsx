'use client'

import { TreatmentForm } from "@/components/domain/pets/health/TreatmentForm";
import NalitaButton from "@/components/ui/buttons/NalitaButton";
import NalitaCard from "@/components/ui/cards/NalitaCard";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <NalitaCard
        title="Proximos tratamientos"
        actionSlot={
          <NalitaButton label="+ Nuevo tratamiento" variant="primary" />
        }
      >
        <li className="flex items-center justify-between rounded-xl border p-3">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-base-200 grid place-items-center">💉</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Antirrábica</span>
                <span className="badge badge-sm badge-warning">Próximo</span>
              </div>
              <div className="text-sm text-base-content/70">
                Próxima: 12/09/2025 • Vet Los Aromos
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-sm">Marcar realizado</button>
            <button className="btn btn-sm btn-ghost">Editar</button>
          </div>
        </li>
      </NalitaCard>

      <NalitaCard title="Historial">
        <li className="flex items-start justify-between border-b py-3">
          <div>
            <div className="font-medium">Vacuna</div>
            <div className="text-sm text-base-content/70">
              Realizado: 15/03/2025 • Lote XYZ-123
            </div>
            {/* {desc && <div className="text-sm mt-1">{desc}</div>} */}
          </div>
          <div className="text-sm text-base-content/60">AR$ 12.000</div>
        </li>
        <li className="flex items-start justify-between border-b py-3">
          <div>
            <div className="font-medium">Vacuna</div>
            <div className="text-sm text-base-content/70">
              Realizado: 15/03/2025 • Lote XYZ-123
            </div>
            {/* {desc && <div className="text-sm mt-1">{desc}</div>} */}
          </div>
          <div className="text-sm text-base-content/60">AR$ 12.000</div>
        </li>
      </NalitaCard>


    </div>
  );
}