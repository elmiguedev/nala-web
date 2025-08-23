import NalitaBanner from "@/components/ui/banners/NalitaBanner";
import { Pet } from "@/core/domain/entities/pets/Pet";

export interface PetProfileProps {
  pet: Pet;
}

export default function PetProfile(props: PetProfileProps) {
  const { pet } = props;
  return (
    <div>

      {/* Banner */}
      <NalitaBanner

      />

    </div>
  );
}