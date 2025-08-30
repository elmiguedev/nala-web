import { PetDiaryEvent } from "@/core/domain/entities/pets/PetDiary";
import { PetDiaryStatus } from "@/core/domain/entities/pets/PetDiaryStatus";
import { PetDiaryType } from "@/core/domain/entities/pets/PetDiaryType";
import * as React from "react";

interface PetDiaryViewProps {
  petName: string; // para el header si querés mostrarlo
  events: PetDiaryEvent[];

  // Callbacks opcionales
  onCreateEvent?: (anchorDate: Date) => void;
  onSelectEvent?: (eventId: string) => void;

  // Filtros iniciales opcionales
  initialType?: "all" | PetDiaryType;
  initialStatus?: "all" | PetDiaryStatus;
}

/** ==== Utils sin libs ==== */
const cn = (...xs: Array<string | false | null | undefined>) => xs.filter(Boolean).join(" ");
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d: Date, n: number) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

function formatDMY(d: Date) {
  return d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });
}
function monthLabel(d: Date) {
  return d.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

type TypeFilter = "all" | PetDiaryType;
type StatusFilter = "all" | PetDiaryStatus;

function byFilters(e: PetDiaryEvent, tf: TypeFilter, sf: StatusFilter) {
  const okType = tf === "all" ? true : e.type === tf;
  const okStatus = sf === "all" ? true : (e.status ?? "pending") === sf;
  return okType && okStatus;
}

/** ==== Componente principal ==== */
export default function PetDiaryView({
  petName,
  events,
  onCreateEvent,
  onSelectEvent,
  initialType = "all",
  initialStatus = "all",
}: PetDiaryViewProps) {
  const [cursor, setCursor] = React.useState<Date>(() => new Date());
  const [typeFilter, setTypeFilter] = React.useState<TypeFilter>(initialType);
  const [statusFilter, setStatusFilter] = React.useState<StatusFilter>(initialStatus);

  // Eventos filtrados por tipo/estado
  const filtered = React.useMemo(
    () => events.filter(e => byFilters(e, typeFilter, statusFilter)),
    [events, typeFilter, statusFilter]
  );

  // Split próximos / pasados (usamos hoy 00:00 para comparar)
  const today = startOfDay(new Date());
  const upcoming = React.useMemo(
    () => filtered
      .filter(e => (e.status ?? "pending") !== "done" && startOfDay(e.date) >= today)
      .sort((a, b) => +a.date - +b.date),
    [filtered, today]
  );
  const past = React.useMemo(
    () => filtered
      .filter(e => startOfDay(e.date) < today || (e.status ?? "pending") === "done")
      .sort((a, b) => +b.date - +a.date),
    [filtered, today]
  );


  return (
    <div className="space-y-6">

      {/* Listas Próximos / Pasados */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <EventList
          title="Próximos eventos"
          items={upcoming}
          empty="No hay eventos próximos."
          onSelectEvent={onSelectEvent}
        />
        <EventList
          title="Pasados"
          items={past}
          empty="Sin registros recientes."
          onSelectEvent={onSelectEvent}
        />
      </div>
    </div>
  );
}

/** ==== Calendario mensual ==== */
function MonthCalendar({
  monthCursor,
  events,
  onSelectEvent,
  onCreateForDay,
}: {
  monthCursor: Date;
  events: PetDiaryEvent[];
  onSelectEvent?: (id: string) => void;
  onCreateForDay?: (day: Date) => void;
}) {
  // Lunes = 0
  const firstOfMonth = new Date(monthCursor.getFullYear(), monthCursor.getMonth(), 1);
  const offset = (firstOfMonth.getDay() + 6) % 7;
  const gridStart = addDays(firstOfMonth, -offset);
  const days = React.useMemo(() => Array.from({ length: 42 }, (_, i) => addDays(gridStart, i)), [gridStart]);

  // index por día
  const byDay = React.useMemo(() => {
    const map = new Map<string, PetDiaryEvent[]>();
    for (const e of events) {
      const key = startOfDay(e.date).toISOString();
      const arr = map.get(key) ?? [];
      arr.push(e);
      map.set(key, arr);
    }
    return map;
  }, [events]);

  return (
    <section className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-7 gap-2 text-center text-xs text-black/60">
        {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map(d => <div key={d} className="py-1">{d}</div>)}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {days.map((d) => {
          const isCurrentMonth = d.getMonth() === monthCursor.getMonth();
          const today = isSameDay(d, new Date());
          const key = startOfDay(d).toISOString();
          const dayEvents = (byDay.get(key) ?? []).sort((a, b) => +a.date - +b.date);

          return (
            <div key={key}
              className={cn(
                "relative aspect-square rounded-xl border p-2",
                isCurrentMonth ? "bg-white" : "bg-black/[0.02]",
                "hover:shadow-md"
              )}
            >
              <div className="flex items-start justify-between">
                <div className={cn("text-sm font-medium", !isCurrentMonth && "text-black/45")}>
                  {d.getDate()}
                </div>
                {today && <span className="rounded-full border px-1.5 text-[10px]">hoy</span>}
              </div>

              {/* “Puntitos” y primer evento destacado con etiqueta */}
              <div className="mt-1 flex flex-wrap gap-1">
                {dayEvents.slice(0, 3).map(e => (
                  <span
                    key={e.id}
                    title={`${e.title}`}
                    className={cn(
                      "h-2 w-2 rounded-full",
                      e.type === "dose" && "bg-emerald-400",
                      e.type === "checkup" && "bg-sky-400",
                      e.type === "other" && "bg-violet-400"
                    )}
                  />
                ))}
              </div>

              {dayEvents.length > 0 && (
                <button
                  onClick={() => onSelectEvent?.(dayEvents[0].id)}
                  className="absolute inset-x-2 bottom-2 truncate rounded-lg border px-2 py-1 text-left text-xs hover:shadow"
                  title={dayEvents[0].title}
                >
                  {dayEvents[0].title}
                </button>
              )}

              {/* CTA rápido para crear en ese día */}
              <button
                onClick={() => onCreateForDay?.(d)}
                className="absolute bottom-2 right-2 rounded-md border px-1 text-xs opacity-70 hover:opacity-100"
                aria-label="Crear evento en este día"
              >
                +
              </button>

              {/* contador extra */}
              {dayEvents.length > 3 && (
                <div className="absolute bottom-2 left-2 text-[10px] text-black/50">
                  +{dayEvents.length - 3}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** ==== Listas ==== */
function EventList({
  title,
  items,
  empty,
  onSelectEvent,
}: {
  title: string;
  items: PetDiaryEvent[];
  empty: string;
  onSelectEvent?: (id: string) => void;
}) {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <div className="max-h-[420px] space-y-3 overflow-auto pr-1">
        {items.length === 0 && <p className="text-sm text-black/50">{empty}</p>}
        {items.map(e => (
          <EventRow key={e.id} e={e} onSelectEvent={onSelectEvent} />
        ))}
      </div>
    </section>
  );
}

function EventRow({ e, onSelectEvent }: { e: PetDiaryEvent; onSelectEvent?: (id: string) => void }) {
  const status = e.status ?? "pending";
  const chip =
    status === "done" ? "bg-emerald-100 text-emerald-700" :
      status === "canceled" ? "bg-rose-100 text-rose-700" :
        "bg-amber-100 text-amber-700";
  const typeBadge =
    e.type === "dose" ? "bg-emerald-50 border-emerald-300" :
      e.type === "checkup" ? "bg-sky-50 border-sky-300" :
        "bg-violet-50 border-violet-300";

  return (
    <div className="flex items-center justify-between rounded-xl border p-3">
      <div className="flex items-center gap-3">
        <span className={cn("rounded-md border px-2 py-1 text-xs capitalize", typeBadge)}>{e.type}</span>
        <div>
          <div className="font-medium">{e.title}</div>
          <div className="text-xs text-black/60">{formatDMY(e.date)}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className={cn("rounded-full px-2 py-1 text-xs capitalize", chip)}>{status}</span>
        <button
          onClick={() => onSelectEvent?.(e.id)}
          className="rounded-lg border px-3 py-1 text-sm hover:shadow"
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
}