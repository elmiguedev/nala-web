import PawIcon from "@/components/icons/PawIcon";
import React, { useEffect, useMemo, useRef, useState } from "react";

export interface NalitaInputPictureProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  className?: string;
  helperText?: string;
}

export default function NalitaInputPicture(props: NalitaInputPictureProps) {
  const { label, name, placeholder = "Elegí una imagen…", className, helperText } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (props.value && !previewUrl) {
      setPreviewUrl(props.value);
      setFileName(null);
    }
  }, [props.value]);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    props.onChange(event);

    if (!file) {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
      setPreviewUrl(null);
      setFileName(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      // Reset the input if it's not an image
      if (inputRef.current) inputRef.current.value = "";
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
      setPreviewUrl(null);
      setFileName(null);
      return;
    }

    // Create preview URL
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setPreviewUrl(url);
    setFileName(file.name);
  };

  const clearSelection = () => {
    if (inputRef.current) inputRef.current.value = "";
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = null;
    setPreviewUrl(null);
    setFileName(null);
  };

  // Styles
  const rootCn = useMemo(
    () =>
      [
        "w-full",
        "space-y-2",
        className,
      ]
        .filter(Boolean)
        .join(" "),
    [className]
  );

  const dropzoneCn = [
    "relative",
    "flex",
    "items-center",
    "justify-center",
    "w-full",
    "rounded-lg",
    "border-2",
    "border-dashed",
    "border-neutral-300",
    "bg-white/60",
    "hover:bg-white",
    "transition",
    "p-3",
    previewUrl ? "h-56" : "h-40",
    "cursor-pointer",
    "focus-within:ring-2",
    "focus-within:ring-offset-2",
    "focus-within:ring-teal-400",
  ].join(" ");

  return (
    <fieldset className="fieldset  ">
      {label && <legend className="fieldset-legend text-lg">{label}</legend>}

      <div className={rootCn}>
        <div
          className={dropzoneCn}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
        >
          {previewUrl ? (
            <div className="absolute inset-0 p-3">
              {/* Preview */}
              <img
                src={previewUrl}
                alt={fileName ?? placeholder}
                className="h-full w-full object-cover rounded-md"
              />
              {/* Overlay actions */}
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSelection();
                  }}
                  className="px-2 py-1 text-xs rounded-md bg-white/90 hover:bg-white border border-neutral-300"
                >
                  Quitar
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center text-neutral-600 select-none">
              <PawIcon className="mb-2" />
              <span className="text-sm font-medium">{placeholder}</span>
              <span className="text-xs text-neutral-500 mt-1">PNG, JPG o WEBP</span>
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            name={name}
            className="sr-only"
            onChange={handleFileChange}
          />
        </div>

        {fileName ? (
          <p className="text-xs text-neutral-500">{fileName}</p>
        ) : null}

        {helperText ? (
          <p className="text-xs text-neutral-500">{helperText}</p>
        ) : null}
      </div>
    </fieldset>
  );
}