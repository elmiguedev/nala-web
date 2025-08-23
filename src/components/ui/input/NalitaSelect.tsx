interface NalitaSelectOption {
  value: string,
  label: string
}

export interface NalitaSelectProps {
  placeholder?: string;
  label?: string;
  name?: string;
  options?: NalitaSelectOption[];
  value?: string;
  onChange?: (v: string) => void;
  className?: string;
  helperText?: string;
}

export default function NalitaSelect(props: NalitaSelectProps) {
  const {
    onChange,
    placeholder,
    label,
    name,
    className,
    helperText,
    options
  } = props;

  const selectClassName = `select select-lg focus:outline-none focus:border-gray-400 ${className}`

  return (
    <fieldset className="fieldset">
      {label && <legend className="fieldset-legend text-lg ">{label}</legend>}
      <select name={name} onChange={(e) => onChange?.(e.target.value)} defaultValue={placeholder} className={selectClassName}>
        {placeholder && <option disabled={true}>{placeholder}</option>}
        {options?.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {helperText && <span className="label">{helperText}</span>}
    </fieldset>
  );
}