import NalitaAvatar from "../avatars/NalitaAvatar";
import DogImage from "../../../assets/img/pets/dog.jpg";
import { TbHealthRecognition } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";


export interface NalitaBannerProps {

}

export default function NalitaBanner(props: NalitaBannerProps) {
  const { } = props;

  return (
    <div className="relative rounded-2xl shadow-sm overflow-hidden">

      {/* parte superior */}
      <div className="h-28 md:h-32 bg-[#FCEFE6]">
        {/* acciones del banner */}
        <div className="absolute right-3 top-3 flex gap-2">
          <button className="text-xs rounded-full px-3 py-1 bg-white/80 hover:bg-white text-neutral-800">
            Editar portada
          </button>
        </div>
      </div>

      {/* parte inferior */}
      <div className="h-72 bg-white pt-20">
        <h1 className="text-4xl font-bold text-center">Nala</h1>
        <p className="text-center">Perro: 3 años</p>

        {/* botones tipo card para Tratamientos y Diario */}
        {/* botones principales */}
        <div className="flex gap-6 justify-center mt-6 text-neutral">
          <button className="flex flex-col items-center justify-center w-32 h-24 rounded-xl bg-[#FCEFE6] hover:bg-[#FAD7C5] shadow-sm transition gap-2 cursor-pointer">
            <TbHealthRecognition size={40} />
            <span className="font-bold">Tratamientos</span>
          </button>

          <button className="flex flex-col items-center justify-center w-32 h-24 rounded-xl bg-[#E6F7FC] hover:bg-[#CDEDF7] shadow-sm transition gap-2 cursor-pointer">
            <LuCalendarDays size={40} />
            <span className="font-bold">Diario</span>
          </button>
        </div>

      </div>

      {/* avatar en el medio */}
      <div className="absolute left-1/2 top-30 -translate-x-1/2 -translate-y-1/2">
        <NalitaAvatar
          src={DogImage}
          alt="avatar"
          width={40}
          height={40}
        />
      </div>

    </div>
  )
}
