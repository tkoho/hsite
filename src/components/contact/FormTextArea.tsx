import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  required?: boolean;
}

export function FormTextArea({ label, name, required }: FormTextAreaProps) {
  return (
    <div>
      <label className="block text-white mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={4}
        className="w-full px-4 py-3 bg-[#2B3377]/50 text-white placeholder-white/50 rounded-lg border border-white/10 focus:border-[#3AAA35] focus:ring-1 focus:ring-[#3AAA35] outline-none transition-colors resize-none"
      />
    </div>
  );
}