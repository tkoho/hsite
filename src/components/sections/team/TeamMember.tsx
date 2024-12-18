import React from 'react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

export function TeamMember({ image, name, role }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-4">
        {/* Green border circle */}
        <div className="absolute inset-0 rounded-full border-2 border-[#3AAA35]"></div>
        {/* Image container */}
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-white/70">{role}</p>
    </div>
  );
}