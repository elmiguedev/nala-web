import NalitaSectionTitle from "../titles/NalitaSectionTitle";

export interface NalitaSection {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}

export default function NalitaSection({ children, title, icon }: NalitaSection) {
  return (
    <section className="mb-6">
      <NalitaSectionTitle title={title} icon={icon} />
      <div className="pt-4">
        {children}
      </div>
    </section>
  );
}

