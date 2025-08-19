import { sizes, variants } from "../utils/BulmaUtils";

interface NalitaTextField {
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'color' | 'date' | 'datetime-local' | 'month' | 'time' | 'week';
  size?: 'small' | 'normal' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function NalitaTextField(props: NalitaTextField) {
  const {
    type = 'text',
    size = 'normal',
    variant = 'primary',
    placeholder,
    name,
    value,
    onChange
  } = props
  const inputClassName = `input ${sizes[size]} ${variants[variant]} nalita-font-body`;
  return (
    <div className="field">
      <div className="control">
        <input
          value={value}
          onChange={onChange}
          className={inputClassName}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  )
}