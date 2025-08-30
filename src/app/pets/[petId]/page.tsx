import { Pet } from "@/core/domain/entities/pets/Pet"


export default function Page() {
  const pet: Pet = {
    id: "1",
    birthdate: new Date(),
    name: "Nala",
    ownerId: "1",
    type: "dog"
  }
  return (
    <div>

    </div>
  )

}