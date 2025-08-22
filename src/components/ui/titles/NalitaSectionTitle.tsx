interface NalitaSectionTitleProps {
  title?: string;
  icon?: React.ReactNode;

}

export default function NalitaSectionTitle({ title, icon }: NalitaSectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-base-content py-2 flex items-center">
      {icon && <div className="mr-3">
        {icon}
      </div>}
      {title}
    </h2>
  )
}

