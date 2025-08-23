'use client'

import { Dispatch, SetStateAction, useMemo, useState } from "react";
import NalitaTextField from "./NalitaTextField";
import { DayPicker } from "react-day-picker";

export interface NalitaDatePickerProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  placeholder?: string
  label?: string
  name?: string
}

export default function NalitaDatePicker(props: NalitaDatePickerProps) {
  const { value, onChange, placeholder, label, name } = props

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
      placeholder={placeholder}
      label={label}
      name={name}
    />
  )
}

