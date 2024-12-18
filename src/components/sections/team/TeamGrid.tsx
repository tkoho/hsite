import React from 'react';
import { TeamMember } from './TeamMember';
import { TEAM_MEMBERS } from '../../../utils/team-data';

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 lg:gap-8">
      {TEAM_MEMBERS.map((member) => (
        <TeamMember
          key={member.name}
          image={member.image}
          name={member.name}
          role={member.role}
        />
      ))}
    </div>
  );
}