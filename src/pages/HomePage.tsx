import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Solutions } from '../components/sections/Solutions';
import { Security } from '../components/sections/Security';
import { Team } from '../components/sections/team/Team';
import { Process } from '../components/sections/Process';

export function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Security />
      <Team />
      <Process />
    </>
  );
}