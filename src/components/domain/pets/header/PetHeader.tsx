'use client'

import { Pet } from "@/core/domain/entities/pets/Pet";


interface PetHeaderProps {
  pet: Pet
}

export default function PetHeader(props: PetHeaderProps) {
  const { pet } = props;
  return (
    <div>
      <h1>Name: {pet.name}</h1>
      <h2>Name: {pet.id}</h2>
      <h2>Name: {String(pet.birthdate)}</h2>
      <h2>Name: {pet.type}</h2>
    </div>
  );
}