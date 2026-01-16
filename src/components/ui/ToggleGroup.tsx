'use client';

import { useState } from 'react';

interface ToggleOption {
  id: string;
  label: string;
}

interface ToggleGroupProps {
  options: ToggleOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function ToggleGroup({ options, defaultValue, onChange }: ToggleGroupProps) {
  const [activeId, setActiveId] = useState(defaultValue || options[0]?.id);

  const handleClick = (id: string) => {
    setActiveId(id);
    onChange?.(id);
  };

  return (
    <div className="toggle-group">
      {options.map((option) => (
        <button
          key={option.id}
          className={`toggle-btn ${activeId === option.id ? 'active' : ''}`}
          onClick={() => handleClick(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
