'use client';

import { CSSProperties } from "react";
import { sizes, variants } from "../utils/BulmaUtils";

export interface NalitaButtonProps {
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'link' | 'dark' | 'light';
  label?: string;
  icon?: React.ReactNode;
  size?: 'small' | 'normal' | 'medium' | 'large';
  rounded?: boolean;
  fullWidth?: boolean;
  className?: string;
  outlined?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  style?: CSSProperties;
  disabled?: boolean
}

export default function NalitaButton(props: NalitaButtonProps) {
  const {
    variant = 'primary',
    label = "",
    icon,
    size = 'normal',
    rounded = false,
    fullWidth = false,
    outlined = false,
    onClick,
    className,
    type = "button",
    loading = false,
    style,
    disabled
  } = props;

  const buttonClassName = [
    'button',
    variants[variant],
    sizes[size],
    rounded && 'is-rounded',
    fullWidth && 'is-fullwidth',
    outlined && 'is-outlined',
    className,
    loading && 'is-loading',
    disabled && 'is-disabled'
  ].join(' ');

  return (
    <button type={type} className={buttonClassName} style={style} onClick={onClick}>
      {icon && <span className="icon mr-2">
        {icon}
      </span>}
      <span>{label}</span>
    </button>
  );
}