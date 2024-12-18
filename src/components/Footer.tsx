import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { Container } from './ui/Container';
import { COMPANY_NAME } from '../utils/constants';
import { FooterSection } from './footer/FooterSection';
import { SocialLinks } from './footer/SocialLinks';
import { Copyright } from './footer/Copyright';

export function Footer() {
  return (
    <footer className="bg-[#1F2B5F] text-white">
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <FooterSection
            title={COMPANY_NAME}
            content="Secure. Scalable. Innovative."
          />
          
          <FooterSection
            title="Company"
            links={[
              { label: 'About Us', href: '#about' },
              { label: 'Blog', href: '#blog' },
              { label: 'Careers', href: '#careers' },
            ]}
          />
          
          <FooterSection
            title="Legal"
            links={[
              { label: 'Terms & Conditions', href: '#terms' },
              { label: 'Privacy Policy', href: '#privacy' },
              { label: 'Compliance', href: '#compliance' },
            ]}
          />
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <SocialLinks />
          </div>
        </div>
        
        <Copyright />
      </Container>
    </footer>
  );
}