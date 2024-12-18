import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}