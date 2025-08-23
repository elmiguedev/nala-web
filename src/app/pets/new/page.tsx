'use client'

import NewPetForm from "@/components/domain/pets/new/NewPetForm";
import NalitaSection from "@/components/ui/sections/NalitaSection";

export default function Page() {
  return (
    <NalitaSection title="Agrega un nuevo amigo a la familia">
      <NewPetForm />
    </NalitaSection>

  )
}

