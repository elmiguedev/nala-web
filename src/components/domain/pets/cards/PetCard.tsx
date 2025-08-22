import { Pet } from "@/core/domain/entities/pets/Pet";
import PetTypeImage from "../images/PetTypeImage";

export interface PetCardProps {
  pet: Pet
}

export default function PetCard(props: PetCardProps) {
  const { pet } = props;
  return (
    <div className="card bg-base-100 w-60 shadow-sm cursor-pointer ">
      <figure>
        <PetTypeImage type={pet.type} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{pet.name}</h2>
      </div>
    </div>
  );
}