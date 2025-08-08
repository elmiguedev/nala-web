import { sizes, variants } from "../utils/BulmaUtils";

interface NalitaTextField {
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
  size?: 'small' | 'normal' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  placeholder?: string;
  name?: string
}

export default function NalitaTextField(props: NalitaTextField) {
  const {
    type = 'text',
    size = 'normal',
    variant = 'primary',
    placeholder,
    name
  } = props
  const inputClassName = `input ${sizes[size]} ${variants[variant]} nalita-font-body`;
  return (
    <div className="field">
      <div className="control">
        <input
          className={inputClassName}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  )
}