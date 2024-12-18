import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

export function FormInput({ label, name, type, required, placeholder }: FormInputProps) {
  return (
    <div>
      <label className="block text-white mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[#2B3377]/50 text-white placeholder-white/50 rounded-lg border border-white/10 focus:border-[#3AAA35] focus:ring-1 focus:ring-[#3AAA35] outline-none transition-colors"
      />
    </div>
  );
}