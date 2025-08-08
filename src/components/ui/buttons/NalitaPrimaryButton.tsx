import NalitaButton, { NalitaButtonProps } from "./NalitaButton";

export default function NalitaPrimaryButton(props: NalitaButtonProps) {
  const className = [
    "has-text-nalita-light",
    "has-text-weight-bold",
    props.className
  ].join(' ');
  return (
    <NalitaButton
      {...props}
      className={className}
    />
  );
}