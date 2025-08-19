import { useMemo } from "react";
import NalitaTextField from "./NalitaTextField";

export interface NalitaDatePickerProps {
  value?: Date;
  onChange?: (value: Date) => void;
  placeholder?: string
}

export function NalitaDatePicker(props: NalitaDatePickerProps) {
  const { value, onChange, placeholder } = props

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    onChange?.(date);
  }

  const selectedDate = useMemo(() => {
    if (value) {
      return value.toISOString().split('T')[0];
    }
    return "";
  }, [value])

  return (
    <NalitaTextField
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
    />
  )
}

