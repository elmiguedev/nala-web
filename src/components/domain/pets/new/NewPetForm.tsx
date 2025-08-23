import NalitaButton from "@/components/ui/buttons/NalitaButton";
import NalitaInputFile from "@/components/ui/input/NalitaInputFile";
import NalitaInputPicture from "@/components/ui/input/NalitaInputPicture";
import NalitaSelect from "@/components/ui/input/NalitaSelect";
import NalitaTextField from "@/components/ui/input/NalitaTextField";

export default function NewPetForm() {
  return (
    <div>
      <NalitaSelect
        label="Tipo de mascota"
        name="type"
        placeholder="Tipo de mascota"
        options={[
          { value: "dog", label: "Perro" },
          { value: "cat", label: "Gato" },
        ]}
      />

      <NalitaTextField
        label="Nombre"
        name="name"
        type="text"
        placeholder="E.g. Nala"

      />

      <NalitaTextField
        label="Fecha de nacimiento"
        name="birthdate"
        type="date"
      />

      <NalitaInputPicture
        label="Foto"
        name="picture"
        onChange={(e) => console.log(e)}
        className="max-w-80"
      />

      <NalitaButton
        label="Agregar mascota"
        variant="success"
        className="mt-4 btn-lg"
      />

    </div>
  )
}