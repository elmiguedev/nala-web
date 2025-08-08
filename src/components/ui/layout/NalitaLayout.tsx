import NalitaNavbar from "../navbar/NalitaNavbar";

interface NalitaLayoutProps {
  children: React.ReactNode
}

export default function NalitaLayout(props: NalitaLayoutProps) {
  const { children } = props;
  return (
    <div>
      <NalitaNavbar />
      {children}
    </div>
  );
}