import React from 'react';

interface FormSelectProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

export function FormSelect({ label, name, options, required }: FormSelectProps) {
  return (
    <div>
      <label className="block text-white mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full px-4 py-3 bg-[#2B3377]/50 text-white rounded-lg border border-white/10 focus:border-[#3AAA35] focus:ring-1 focus:ring-[#3AAA35] outline-none transition-colors appearance-none"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}