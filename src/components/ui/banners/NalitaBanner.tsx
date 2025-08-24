import NalitaAvatar from "../avatars/NalitaAvatar";
import DogImage from "../../../assets/img/pets/dog.jpg";
import { StaticImageData } from "next/image";

export interface NalitaBannerProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  avatarUrl?: string | StaticImageData;
  bannerBackgroundColor?: string;
}

export default function NalitaBanner(props: NalitaBannerProps) {
  const {
    children,
    title,
    subtitle,
    avatarUrl,
    bannerBackgroundColor = "#FCEFE6",
  } = props;

  return (
    <div className="relative rounded-2xl shadow-sm overflow-hidden">

      {/* parte superior */}
      <div className={`h-28 md:h-32 bg-[${bannerBackgroundColor}]`}>

        {/* acciones del banner */}
        <div className="absolute right-3 top-3 flex gap-2">
          <button className="text-xs rounded-full px-3 py-1 bg-white/80 hover:bg-white text-neutral-800">
            Editar portada
          </button>
        </div>

      </div>

      {/* parte inferior */}
      <div className="h-72 bg-white pt-20">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        <p className="text-center">{subtitle}</p>
        <div className="flex gap-6 justify-center mt-6 text-neutral">
          {children}
        </div>
      </div>

      {/* avatar en el medio */}
      {avatarUrl && <div className="absolute left-1/2 top-30 -translate-x-1/2 -translate-y-1/2">
        <NalitaAvatar
          src={DogImage}
          alt="avatar"
          width={40}
          height={40}
        />
      </div>}

    </div>
  )
}
