import DocsEmpty from '@/assests/empty.jpg';
import { Button } from '../ui/button';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { IbtnVariant } from '@/interface-types/interface';

type EmptyDataProps = {
  title?: string;
  subtitle?: string;
  btnAction?: () => void;
  btnLabel?: string;
  btnVariant?: IbtnVariant;
  icon?: string;
  hideButton?: boolean;
};

const EmptyData: React.FC<EmptyDataProps> = ({
  title,
  subtitle,
  btnAction,
  btnLabel,
  btnVariant,
  icon,
  hideButton,
}) => {
  const handleBtn = (): void => {
    if (btnAction) {
      btnAction();
    }
  };

  return (
    <div className='flex flex-col place-items-center md:my-12 lg:my-32 gap-4'>
      <Image
        src={DocsEmpty}
        className='h-[25rem] object-contain mx-auto'
        alt='empty ui'
      />
      <h2 className='text-2xl font-medium '>{title}</h2>
      <p className='text-lg'>{subtitle}</p>
      {btnAction && !hideButton && (
        <Button
          variant={`${btnVariant ? btnVariant : 'default'}`}
          className='flex justify-between align-center'
          type='button'
          onClick={handleBtn}
        >
          {icon ? 'header btn icon' : <PlusIcon size={20} className='mr-2' />}

          {btnLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyData;
