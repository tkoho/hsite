import { LucideIcon } from 'lucide-react';

export interface Solution {
  id: string;
  title: string;
  description: {
    main: string;
    details: string | string[];
  };
  icon: LucideIcon;
}