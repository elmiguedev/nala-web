'use client'

import CatIcon from "@/components/icons/CatIcon";
import DogIcon from "@/components/icons/DogIcon";
import PawIcon from "@/components/icons/PawIcon";
import NalitaPrimaryButton from "@/components/ui/buttons/NalitaPrimaryButton";
import NalitaButtonSelector from "@/components/ui/input/NalitaButtonSelector";
import { NalitaDatePicker } from "@/components/ui/input/NalitaDatePicker";
import NalitaTextField from "@/components/ui/input/NalitaTextField";
import { PetCreationParams } from "@/core/domain/pets/PetCreationParams";
import { PetType } from "@/core/domain/pets/PetType";
import useCreatePet from "@/hooks/domain/pets/useCreatePet";
import { useState } from "react";

export default function NewPetPage() {
  const { createPet, loading } = useCreatePet();
  const [form, setForm] = useState<PetCreationParams>({
    birthdate: new Date(),
    name: "",
    type: "dog",
    imgUrl: ""
  })
  const typeOptions = [
    { value: "cat", label: "Cat", icon: <CatIcon style={{ minWidth: "64px" }} /> },
    { value: "dog", label: "Dog", icon: <DogIcon style={{ minWidth: "50px" }} /> },
  ]

  const handlePetTypeChange = (v: string) => {
    setForm({ ...form, type: v as PetType })
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleDateChange = (v: Date) => {
    setForm({ ...form, birthdate: v })
  }

  const handleCreatePet = async () => {
    await createPet(form);
  }

  return (
    <div className="container">
      <div className="is-flex is-flex-direction-column is-align-items-center p-5">

        <pre>
          {JSON.stringify(form, null, 2)}
        </pre>

        {/* form */}
        <div className="mb-3" style={{ minWidth: "300px", maxWidth: "400px" }} >
          <NalitaButtonSelector
            options={typeOptions}
            selected={form.type}
            onChange={handlePetTypeChange}
          />
          <NalitaTextField placeholder="Name" name="name" onChange={handleNameChange} value={form.name} />
          <NalitaDatePicker value={form.birthdate} onChange={handleDateChange} placeholder="Birthdate" />
          <NalitaPrimaryButton label="Register my pet" fullWidth loading={loading} onClick={handleCreatePet} />
        </div>


      </div>
    </div>
  );
}