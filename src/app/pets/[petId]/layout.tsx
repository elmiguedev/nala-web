import PetHeader from "@/components/domain/pets/header/PetHeader"
import { Pet } from "@/core/domain/entities/pets/Pet"

type LayoutProps = {
  children: React.ReactNode,
  params: {
    petId: string
  }
}

const getPet = (petId: string): Promise<Pet> => {
  return Promise.resolve({
    id: "1",
    birthdate: new Date(),
    name: "Nala",
    ownerId: "1",
    type: "dog"
  })
}

export default async function Layout({ children, params }: LayoutProps) {
  const { petId } = await params;
  const pet = await getPet(petId);

  return (
    <div>
      <PetHeader pet={pet} />
      <div className="pt-4">
        {children}
      </div>
    </div>
  );
}