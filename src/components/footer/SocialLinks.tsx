import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { Icon: Linkedin, href: '#linkedin' },
    { Icon: Twitter, href: '#twitter' },
    { Icon: Facebook, href: '#facebook' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ Icon, href }) => (
        <a 
          key={href} 
          href={href} 
          className="hover:text-[#3AAA35]"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}