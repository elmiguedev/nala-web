import PetProfile from "@/components/domain/pets/profile/PetProfile"
import PetProfilePage from "@/components/domain/pets/profile/PetProfilePage"
import { Pet } from "@/core/domain/entities/pets/Pet"

type PageProps = {
  params: {
    petId: string
  }
}

export default function Page({ params }: PageProps) {
  const pet: Pet = {
    id: "1",
    birthdate: new Date(),
    name: "Nala",
    ownerId: "1",
    type: "dog"
  }
  return (
    <PetProfile
      pet={pet}
    />
  )

}