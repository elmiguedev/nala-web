import DogImage from "../../../../assets/img/pets/dog.jpg";
import { TbHealthRecognition } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { Pet } from "@/core/domain/entities/pets/Pet";
import NalitaBanner from "@/components/ui/banners/NalitaBanner";
import PetHeaderMenuButton from "./PetHeaderMenuButton";


export interface PetHeaderProps {
  pet: Pet
}

export default function PetHeader(props: PetHeaderProps) {
  const { pet } = props;

  return (
    <NalitaBanner
      title={pet.name}
      subtitle={pet.type}
      avatarUrl={DogImage}
    >
      <PetHeaderMenuButton
        href={`/pets/${pet.id}/health`}
        icon={<TbHealthRecognition size={40} />}
        label="Salud"
        backgroundColor="#FCEFE6"
      />

      <PetHeaderMenuButton
        href={`/pets/${pet.id}/diary`}
        icon={<LuCalendarDays size={40} />}
        backgroundColor="#E6F7FC"
        label="Diario"
      />

    </NalitaBanner>
  )
}
