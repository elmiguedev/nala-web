export interface NalitaCardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  actionSlot?: React.ReactNode
}

export default function NalitaCard(props: NalitaCardProps) {
  const {
    children,
    className,
    title,
    actionSlot
  } = props;


  return (
    <div className={`card bg-base-100 shadow-sm ${className}`}>
      <div className="card-body">
        <div className="flex items-center justify-between">
          {title && <h2 className="card-title">{title}</h2>}
          {actionSlot}
        </div>
        {children}
      </div>
    </div>
  );
}