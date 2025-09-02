import { requireAuth } from "@/helpers/auth/requireAuth";
import { getServerSession } from "next-auth";
import LogoutButton from "../components/LogoutButton";
import { authOptions } from "@/helpers/auth/authOptions";
import TestButton from "@/components/TestButton";
import NalitaSectionTitle from "@/components/ui/titles/NalitaSectionTitle";
import NalitaSection from "@/components/ui/sections/NalitaSection";
import PetCard from "@/components/domain/pets/cards/PetCard";
import NewPetCard from "@/components/domain/pets/cards/NewPetCard";

export default async function AppPage() {
  await requireAuth();
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div>
      <NalitaSection title="Mis Mascotas" icon={"🐶"}>
        <div className="flex gap-5" >

          <PetCard pet={{
            id: "1",
            name: "Nala",
            birthdate: new Date(),
            ownerId: "1",
            type: "dog",
          }} />

          <PetCard pet={{
            id: "2",
            name: "Choro",
            birthdate: new Date(),
            ownerId: "1",
            type: "cat",
          }} />

          <NewPetCard />


        </div>
      </NalitaSection>
      <NalitaSection title="Adopciones" icon={"♥️"}>
        <div className="grid grid-cols-3 gap-5">
          <div className="card bg-base-100 shadow-md rounded-lg">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYCl1QbGgysxkaRxpFuZtGzIwJK0_qyvYsA&s"
                alt="Luna"
                className="h-72 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">Luna</h2>
              <p className="text-sm text-gray-600">1 años • Mediana • Córdoba</p>
              <div className="badge badge-success mt-2">Disponible</div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-outline">Ver más</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md rounded-lg">
            <figure>
              <img
                src="https://http2.mlstatic.com/D_935625-MLA78317230481_082024-O.jpg"
                alt="Peludito"
                className="h-72 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">Peludito</h2>
              <p className="text-sm text-gray-600">1 años • Mediana • Córdoba</p>
              <div className="badge badge-success mt-2">Disponible</div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-outline">Ver más</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md rounded-lg">
            <figure>
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_827839-MLA48347138011_112021-O.webp"
                alt="Coco"
                className="h-72 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">Coco</h2>
              <p className="text-sm text-gray-600">1 años • Mediana • Córdoba</p>
              <div className="badge badge-success mt-2">Disponible</div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-outline">Ver más</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md rounded-lg w-72">
            <figure>
              <img
                src="https://www.huellascallejeras.com/wp-content/uploads/2017/06/CACHORROS-ADOPCION-PERROS-HUELLAS-CALLEJERAS.jpeg-820x1093.jpeg"
                alt="Luna"
                className="h-72 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">Vaquita</h2>
              <p className="text-sm text-gray-600">1 años • Mediana • Córdoba</p>
              <div className="badge badge-success mt-2">Disponible</div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-outline">Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </NalitaSection>
      <NalitaSection title="Perros perdidos" icon={"🔎"}>
        <h1>hola soy el seccion</h1>
      </NalitaSection>
      <NalitaSection title="Perros encontrados" icon={"🙌"}>
        <h1>hola soy el seccion</h1>
      </NalitaSection>
    </div>
  );
}