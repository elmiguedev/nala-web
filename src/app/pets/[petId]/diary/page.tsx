'use client'
import PetDiaryView from "@/components/domain/pets/diary/PetDiary";
import { PetDiaryEvent } from "@/core/domain/entities/pets/PetDiary";
import { PetDiaryStatus } from "@/core/domain/entities/pets/PetDiaryStatus";
import { PetDiaryType } from "@/core/domain/entities/pets/PetDiaryType";
import React from "react";

function mockEvents(petId = "nala"): PetDiaryEvent[] {
  const now = new Date(); // hoy
  const y = now.getFullYear();
  const m = now.getMonth();

  const mk = (
    d: Date,
    title: string,
    type: PetDiaryType,
    status: PetDiaryStatus = "pending",
    notes?: string
  ): PetDiaryEvent => ({
    id: crypto.randomUUID(),
    petId,
    type,
    title,
    notes,
    date: d,
    status,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return [
    // PASADOS (mismo mes)
    mk(new Date(y, m, 5, 10, 0), "Consulta general", "checkup", "done", "Control de rutina"),
    mk(new Date(y, m, 10, 9, 0), "Desparasitación", "dose", "done"),
    // PRÓXIMOS (mismo mes)
    mk(new Date(y, m, 17, 18, 0), "1° Revacunación DHPPi", "dose", "pending"),
    mk(new Date(y, m, 22, 11, 0), "Control ojos", "checkup", "pending", "Revisar lagañas"),
    // OTROS (siguiente mes)
    mk(new Date(y, m + 1, 2, 9, 30), "Pipeta pulgas", "dose", "pending"),
    mk(new Date(y, m + 1, 15, 16, 0), "Chequeo dental", "checkup", "pending"),
    // CANCELADO (se muestra como pasado por estado)
    mk(new Date(y, m - 1, 28, 14, 0), "Control piel", "checkup", "canceled"),
    // VARIOS en el mismo día (para ver los puntitos del calendario)
    mk(new Date(y, m, 22, 15, 0), "Vacuna leptospirosis", "dose", "pending"),
    mk(new Date(y, m, 22, 17, 0), "Baño y corte", "other", "pending"),
  ];
}

export default function Page() {
  const [events, setEvents] = React.useState<PetDiaryEvent[]>(() => mockEvents());
  return (
    <div>
      <PetDiaryView
        petName="Nala"
        events={events}
        onCreateEvent={(anchorDate: Date) => {
          // Ejemplo rápido: crear un evento vacío en el día clickeado
          const newEvent: PetDiaryEvent = {
            id: crypto.randomUUID(),
            petId: "nala",
            type: "checkup",
            title: "Nuevo evento",
            date: new Date(anchorDate),
            status: "pending",
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          setEvents((prev) => [...prev, newEvent]);
        }}
        onSelectEvent={(id) => {
          // Abrí tu modal acá; por ahora mostramos por consola
          const e = events.find((x) => x.id === id);
          console.log("Ver detalle:", e);
          alert(`Ver detalle: ${e?.title} (${e?.date.toLocaleString()})`);
        }}
      />
    </div>
  );
}