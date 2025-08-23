import Image, { StaticImageData } from "next/image";

interface NalitaAvatarProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;

}

export default function NalitaAvatar(props: NalitaAvatarProps) {
  const {
    src,
    alt,
    className,
    onClick,
    width,
    height
  } = props;

  const containerClassName = `
    ring-white ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2
    ${onClick ? "cursor-pointer" : ""}
    ${width ? `w-${width}` : ""}
    ${height ? `h-${height}` : ""}
    ${className}
  `;

  return (
    <div className="avatar">
      <div className={containerClassName}>
        <Image alt={alt} src={src} />
      </div>
    </div>
  );
}