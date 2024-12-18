import React, { ReactNode } from 'react';

interface FormCheckboxProps {
  label: ReactNode;
  name: string;
  required?: boolean;
}

export function FormCheckbox({ label, name, required }: FormCheckboxProps) {
  return (
    <label className="flex items-center space-x-3 text-white">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="w-5 h-5 rounded border-white/10 text-[#3AAA35] focus:ring-[#3AAA35] focus:ring-offset-0 focus:ring-offset-transparent"
      />
      <span>{label}</span>
    </label>
  );
}