import { DoseApplication } from "@/core/domain/entities/pets/DoseApplication";
import { useState } from "react";

type Props = {
  application: DoseApplication;
};

function formatDate(d?: Date) {
  if (!d) return "-";
  try {
    return new Date(d).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return "-";
  }
}

export default function DoseApplicationItem({ application }: Props) {
  const [open, setOpen] = useState(false);

  const doseLabel =
    application.amount != null
      ? `${application.amount}${application.unit ? ` ${application.unit}` : ""}`
      : application.unit
        ? `1 ${application.unit}`
        : "—";

  const typeLabel = application.type; // p.ej. "vaccine", "deworming"

  return (
    <>
      <div
        className="
          group relative w-full rounded-xl border border-black/10 bg-white
          shadow-sm hover:shadow-md transition-shadow
          p-4 md:p-5
        "
      >
        {/* left: type + name */}
        <div className="flex items-start gap-3">
          {/* type pill */}
          <span
            className="
              inline-flex items-center rounded-full border border-black/10 px-2.5 py-0.5
              text-xs font-semibold uppercase tracking-wide
              bg-emerald-50 text-emerald-800
            "
            title={typeLabel}
          >
            {typeLabel}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 truncate">
                {application.name}
              </h3>

              {/* dose */}
              <span className="text-xs md:text-sm text-gray-600">
                <strong>Dosis:</strong> {doseLabel}
              </span>

              {/* date */}
              <span className="text-xs md:text-sm text-gray-600">
                <strong>Fecha:</strong> {formatDate(application.date)}
              </span>
            </div>

            {/* subtle next date hint */}
            {application.nextDate && (
              <div className="mt-1 text-xs text-gray-500">
                Próxima: {formatDate(application.nextDate)}
              </div>
            )}
          </div>

          {/* action */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              shrink-0 rounded-lg border border-black/10 px-3 py-1.5 text-sm
              bg-black/5 hover:bg-black/10 transition-colors
            "
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            Ver detalle
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div
            className="
              relative z-10 w-[92vw] max-w-lg rounded-2xl border border-black/10
              bg-white p-5 md:p-6 shadow-xl
            "
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold">{application.name}</h2>
                <p className="text-xs text-gray-500">
                  ID: {application.id}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-sm hover:bg-black/5"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-3 gap-2">
                <span className="text-gray-500">Tipo</span>
                <span className="col-span-2 font-medium">{application.type}</span>

                <span className="text-gray-500">Fecha</span>
                <span className="col-span-2 font-medium">{formatDate(application.date)}</span>

                <span className="text-gray-500">Próxima</span>
                <span className="col-span-2 font-medium">{formatDate(application.nextDate)}</span>

                <span className="text-gray-500">Dosis</span>
                <span className="col-span-2 font-medium">{doseLabel}</span>

                <span className="text-gray-500">Clínica</span>
                <span className="col-span-2 font-medium">{application.clinic ?? "—"}</span>

                <span className="text-gray-500">Veterinario/a</span>
                <span className="col-span-2 font-medium">{application.veterinarian ?? "—"}</span>
              </div>

              <div className="pt-3">
                <p className="text-gray-500 mb-1">Notas</p>
                <p className="rounded-lg border border-black/10 bg-black/5 p-2">
                  {application.notes?.trim() || "—"}
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-black/10 bg-black/5 px-3 py-1.5 text-sm hover:bg-black/10"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}