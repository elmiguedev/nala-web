'use client'

import NalitaButton from "../buttons/NalitaButton";

interface NalitaButtonSelectorOption {
  icon: React.ReactNode;
  value: string;
  label?: string;
}

export interface NalitaButtonSelectorProps {
  options: NalitaButtonSelectorOption[];
  selected: string;
  onChange: (value: string) => void;
}

export default function NalitaButtonSelector(props: NalitaButtonSelectorProps) {
  const { options, selected, onChange } = props;
  return (
    <div className="field">
      <div className="columns is-mobile">
        {options.map((option) => (
          <div className="column" key={option.value}>
            <NalitaButton
              orientation="vertical"
              variant={selected === option.value ? "primary" : "secondary"}
              icon={option.icon}
              label={option.label}
              onClick={() => onChange(option.value)}
              fullWidth
              style={{
                minHeight: "100px",
                borderColor: selected === option.value ? "#99756A" : "#99756A",
                color: selected === option.value ? "white" : "#99756A",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "16px",
                fontWeight: "bold",
                transition: "none",
              }}

            />
          </div>
        ))}
      </div>
    </div>
  );
}