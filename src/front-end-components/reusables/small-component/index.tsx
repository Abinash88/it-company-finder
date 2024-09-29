import { ChevronDown } from 'lucide-react';
import React from 'react';

export const ExportText = () => {
  return (
    <div className='flex items-center gap-2'>
      <span className='text-dark-300 '>Select...</span>
      <ChevronDown className='size-3 text-dark-300' />
    </div>
  );
};
