import { Pet } from "@/core/domain/entities/pets/Pet";
import PetTypeImage from "../images/PetTypeImage";
import PawIcon from "@/components/icons/PawIcon";
import Link from "next/link";

export interface PetCardProps {
}

export default function NewPetCard(props: PetCardProps) {
  return (
    <Link href="/pets/new" className="card card-dash border-gray-300 w-60 cursor-pointer hover:border-gray-400 hover:bg-orange-50 transition duration-300">
      <div className="card-body flex flex-col items-center justify-center">
        <PawIcon className="w-16 h-16 text-gray-600" />
        <span className="mt-2 font-semibold text-gray-600 text-lg">Agregar mascota</span>
      </div>
    </Link>
  );
}