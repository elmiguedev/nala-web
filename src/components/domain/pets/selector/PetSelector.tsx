'use client'

import PawIcon from "@/components/icons/PawIcon";
import { Pet } from "@/core/domain/pets/Pet";
import { useRouter } from "next/navigation";

export interface PetSelectorProps {
  pets: Pet[]
}

export default function PetSelector(props: PetSelectorProps) {
  return (
    <div className="columns">
      {props.pets.map(pet => (
        <div className="column" key={pet.id}>
          <PetOption pet={pet} />
        </div>
      ))}
    </div>
  )
}

function PetOption({ pet }: { pet: Pet }) {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/pets/${pet.id}`)
  }

  return (
    <div onClick={handleClick} className="is-flex is-flex-direction-column is-align-items-center">
      <PawIcon style={{ width: "128px", height: "128px" }} />
      <span className="is-size-4">{pet.name}</span>
    </div>
  )
}