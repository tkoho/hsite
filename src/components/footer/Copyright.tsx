import React from 'react';
import { COMPANY_NAME } from '../../utils/constants';

export function Copyright() {
  return (
    <div className="border-t border-[#2B3377] mt-8 pt-8 text-center text-[#F5F6FA]/80">
      <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
    </div>
  );
}