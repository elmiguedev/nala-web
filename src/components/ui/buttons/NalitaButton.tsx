'use client';

import { CSSProperties } from "react";

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
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const variantClasses: Record<string, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  danger: "btn-error",
  link: "btn-link",
  dark: "btn-neutral",
  light: "btn-ghost",
};

const sizeClasses: Record<string, string> = {
  small: "btn-sm",
  normal: "",        // default
  medium: "btn-md",
  large: "btn-lg",
};

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
    disabled,
    orientation = 'horizontal'
  } = props;

  const baseClasses = `
    btn inline-flex items-center justify-center gap-2
    ${variant === 'link' ? '' : variantClasses[variant]}
    ${outlined ? 'btn-outline' : ''}
    ${sizeClasses[size]}
    ${fullWidth ? 'btn-block' : ''}
    ${rounded ? 'rounded-full' : ''}
    ${loading ? 'loading' : ''}
    ${disabled ? 'btn-disabled' : ''}
  `;

  return (
    <button
      type={type}
      className={`${baseClasses} ${className ?? ""}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {orientation === 'horizontal' && (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {label && <span>{label}</span>}
        </>
      )}
      {orientation === 'vertical' && (
        <div className="flex flex-col items-center justify-center gap-1">
          {icon && <span>{icon}</span>}
          {label && <span>{label}</span>}
        </div>
      )}
    </button>
  );
}