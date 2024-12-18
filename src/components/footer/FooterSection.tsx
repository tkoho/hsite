import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  content?: string;
  links?: FooterLink[];
}

export function FooterSection({ title, content, links }: FooterSectionProps) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      {content && <p className="text-[#F5F6FA]/80">{content}</p>}
      {links && (
        <ul className="space-y-2 text-[#F5F6FA]/80">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[#3AAA35]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}