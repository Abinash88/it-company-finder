import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { ExportText } from './small-component';

interface TProps {
  options: { label: string; value: string }[];
  multiple?: boolean;
}

const ReactSelect = ({ options, multiple }: TProps) => {
  const [arrayData, setArrayData] = useState<string[]>([]);
  const [data, setData] = useState('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const onOptionSelect = (data: string) => {
    if (!data) return;
    if (multiple) {
      setArrayData((prev) => {
        const newD = [...prev];
        return [...newD, data];
      });
    } else {
      setData(data);
    }
  };

  const handleDelete = (param: string) => {
    setArrayData((prev) => {
      const newD = [...prev];
      return newD.filter((item) => item !== param);
    });
  };

  const searched = options?.filter((item) =>
    item?.label.toLowerCase().includes(search.toLowerCase())
  );

  const isItemSelected = searched.filter((item) =>
    arrayData.includes(item?.label.toLowerCase())
  );
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className='w-full'>
          <Button
            type='button'
            variant={'outline'}
            aria-expanded={open}
            className={cn(
              `w-full h-auto flex justify-between`,
              multiple && 'flex items-center flex-wrap gap-1 justify-start'
            )}
          >
            {multiple ? (
              arrayData.length ? (
                arrayData?.map((item) => (
                  <div
                    className='p-2 rounded-sm flex items-center gap-2 bg-gray-50'
                    key={item}
                  >
                    <span> {item}</span>
                    <X
                      className='size-3 text-gray-500'
                      onClick={() => handleDelete(item)}
                    />
                  </div>
                ))
              ) : (
                <ExportText />
              )
            ) : (
              data || <ExportText />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <Input
              type='search'
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              placeholder='Search here...'
              className='h-9'
            />
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {isItemSelected.map((item) => {
                  return (
                    <CommandItem
                      key={item?.label}
                      onSelect={(e) => {
                        onOptionSelect(e);
                        if (!multiple) setOpen(false);
                      }}
                    >
                      {item?.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ReactSelect;
