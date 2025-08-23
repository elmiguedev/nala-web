// PetProfilePage.tsx
import Image from "next/image";

type EventItem = { id: string; date: string; title: string; note?: string };
type PetType = "perro" | "gato";

function defaultImageByType(type: PetType) {
  return type === "perro" ? "/img/pets/default-dog.svg" : "/img/pets/default-cat.svg";
}

export default function PetProfilePage({
  pet,
  events = [],
}: {
  pet: {
    id: string;
    name: string;
    type: PetType;
    photoUrl?: string | null; // viene de NalitaInputPicture o null
    birthDate?: string; // ISO
  };
  events: EventItem[];
}) {
  const coverColor = pet.type === "perro" ? "bg-[#FCEFE6]" : "bg-[#3E4650]"; // tono dog vs cat
  const textOnCover = pet.type === "perro" ? "text-neutral-800" : "text-white/90";
  const avatarSrc = pet.photoUrl || defaultImageByType(pet.type);

  // util chica
  const yearsOld = pet.birthDate
    ? Math.max(0, new Date().getFullYear() - new Date(pet.birthDate).getFullYear())
    : undefined;

  return (
    <div className="mx-auto max-w-6xl p-4 md:p-6">
      {/* Banner */}
      <div className={`relative h-40 md:h-56 rounded-2xl ${coverColor} shadow-sm`}>
        {/* patrón doodle sutil */}
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle,black_1px,transparent_1px)] [background-size:12px_12px]" />
        {/* acciones del banner (opcional) */}
        <div className="absolute right-3 top-3 flex gap-2">
          <button className={`text-xs rounded-full px-3 py-1 bg-white/80 hover:bg-white ${textOnCover.replace("text-", "text-")}`}>
            Editar portada
          </button>
        </div>
      </div>

      {/* Header: avatar + nombre */}
      <div className="-mt-12 md:-mt-16 flex items-end gap-4">
        <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-2xl ring-4 ring-white overflow-hidden shadow-md bg-white">
          <Image src={avatarSrc} alt={pet.name} fill className="object-cover" />
        </div>

        <div className="pb-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{pet.name}</h1>
          <p className="text-sm text-neutral-500">
            <span className="mr-2">Tipo: <strong className="font-semibold">{pet.type}</strong></span>
            {yearsOld !== undefined && <>· Edad: <strong className="font-semibold">{yearsOld}</strong></>}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`/pets/${pet.id}/treatments`}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium hover:shadow"
            >
              🩺 Tratamientos
            </a>
            <a
              href={`/pets/${pet.id}/diary`}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium hover:shadow"
            >
              📅 Diario
            </a>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Próximos eventos */}
        <section className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold">Próximos eventos</h2>
            <a href={`/pets/${pet.id}/calendar`} className="text-sm text-neutral-500 hover:underline">Ver calendario</a>
          </div>

          {events.length === 0 ? (
            <p className="text-sm text-neutral-500">No hay eventos próximos. Creá uno desde el Diario.</p>
          ) : (
            <ul className="divide-y divide-neutral-100">
              {events.slice(0, 5).map((ev) => (
                <li key={ev.id} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium">{ev.title}</p>
                    <p className="text-xs text-neutral-500">{new Date(ev.date).toLocaleString()}</p>
                    {ev.note && <p className="text-xs text-neutral-500 mt-1">{ev.note}</p>}
                  </div>
                  <a
                    href={`/pets/${pet.id}/calendar?event=${ev.id}`}
                    className="text-sm rounded-lg border px-3 py-1 hover:bg-neutral-50"
                  >
                    Ver
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Aside: tarjeta de info + acciones */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <h3 className="mb-2 text-sm font-bold">Info rápida</h3>
            <dl className="text-sm text-neutral-700">
              <div className="flex justify-between py-1">
                <dt className="text-neutral-500">Tipo</dt>
                <dd className="font-medium">{pet.type}</dd>
              </div>
              {yearsOld !== undefined && (
                <div className="flex justify-between py-1">
                  <dt className="text-neutral-500">Edad</dt>
                  <dd className="font-medium">{yearsOld} años</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-2xl border border-dashed border-neutral-300 bg-white/60 p-4 text-center">
            <p className="text-sm font-medium mb-2">Actualizar foto</p>
            {/* Podés reusar tu NalitaInputPicture acá */}
            <label className="inline-block cursor-pointer rounded-lg border px-3 py-2 text-sm hover:bg-white">
              Cambiar imagen
              <input type="file" accept="image/*" className="sr-only" />
            </label>
          </div>
        </aside>
      </div>
    </div>
  );
}