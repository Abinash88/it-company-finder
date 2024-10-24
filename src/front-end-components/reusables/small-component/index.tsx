import { ChevronDown } from 'lucide-react';

export const ExportText = () => {
  return (
    <div className='flex w-full justify-between items-center gap-2'>
      <span className='text-dark-300 3xl:text-sm text-xs'>Select...</span>
      <ChevronDown className=' text-dark-300 3xl:w-5  w-4 ' />
    </div>
  );
};
