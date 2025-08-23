interface NalitaTextField {
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'color' | 'date' | 'datetime-local' | 'month' | 'time' | 'week';
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  className?: string;
  helperText?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function NalitaTextField(props: NalitaTextField) {
  const {
    type = 'text',
    placeholder,
    label,
    name,
    value,
    className,
    helperText,
    onChange
  } = props
  const inputClassName = `input input-lg focus:outline-none focus:border-gray-400 ${className}`;
  return (
    <fieldset className="fieldset  ">
      {label && <legend className="fieldset-legend text-lg">{label}</legend>}
      <input type={type} className={inputClassName} placeholder={placeholder} name={name} value={value} onChange={onChange} />
      {helperText && <p className="label ">{helperText}</p>}
    </fieldset>
  )
}