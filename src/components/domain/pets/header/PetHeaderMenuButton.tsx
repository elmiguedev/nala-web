import Link from "next/link";

interface PetHeaderMenuButtonProps {
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  href?: string;
  backgroundColor?: string;
}

export default function PetHeaderMenuButton(props: PetHeaderMenuButtonProps) {
  const {
    icon,
    label,
    onClick,
    href = "#",
    backgroundColor = "#FCEFE6"
  } = props;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        w-32 h-24 
        rounded-xl 
        bg-[${backgroundColor}] 
        hover:brightness-97
        shadow-sm 
        transition 
        gap-2 
        cursor-pointer`}>
      {icon}
      <span className="font-bold">{label}</span>
    </Link>
  )
}