import React, { useState } from 'react';

export interface NalitaInputFileProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  className?: string;
  helperText?: string
}

export default function NalitaInputFile(props: NalitaInputFileProps) {
  const {
    onChange,
    placeholder,
    label,
    name,
    className,
    helperText
  } = props;

  const [fileName, setFileName] = useState<string>("");

  const inputClassName = `file-input file-input-lg focus:outline-none focus:border-gray-400 ${className}`

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("");
    }
    onChange(event);
  };

  return (
    <fieldset className="fieldset ">
      {label && <legend className="fieldset-legend text-lg">{label}</legend>}
      <input
        type="file"
        name={name}
        placeholder={placeholder}
        className={inputClassName}
        onChange={handleChange}
      />
      {helperText && <label className="label">{helperText}</label>}
    </fieldset>)
}