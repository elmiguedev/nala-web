import { PetType } from "@/core/domain/entities/pets/PetType";
import Image from "next/image";
import DogImage from "../../../../assets/img/pets/dog.jpg";
import CatImage from "../../../../assets/img/pets/cat.png";
import { CSSProperties } from "react";


export interface PetTypeImageProps {
  type: PetType;
  className?: string;
  style?: CSSProperties;
}

export default function PetTypeImage(props: PetTypeImageProps) {
  const { type, className, style } = props;
  switch (type) {
    case "cat": return <Image src={CatImage} alt="Cat" className={className} style={style} />
    case "dog": return <Image src={DogImage} alt="Dog" className={className} style={style} />
  }
}