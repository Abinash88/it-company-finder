import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ExportText } from './small-component';

type SelectType = { label: string; value: string };

interface TProps {
  options: SelectType[];
  multiple?: boolean;
  onChange: (data: string | string[] | undefined) => void;
  value: string | string[];
}

const ReactSelect = ({ options, multiple, onChange, value }: TProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const onOptionSelect = (data: string) => {
    if (!data) return;
    if (multiple) {
      if (Array.isArray(value)) {
        const newData = value.filter((item) => item !== data);
        if (value.includes(data)) {
          onChange(newData);
        } else {
          onChange([...newData, data]);
        }
      } else {
        onChange([data]);
        return;
      }
    } else {
      if (data === value) {
        onChange(undefined);
      } else {
        onChange(data);
      }
    }
  };

  const handleDelete = (param: string | undefined) => {
    if (multiple && Array.isArray(value)) {
      onChange(value.filter((item) => item !== param));
    }
  };

  const searched = options?.filter((item) =>
    item?.label.toLowerCase().includes(search.toLowerCase())
  );

  const renderValue = () => {
    if (multiple && Array.isArray(value)) {
      return value.length ? (
        value
          .map((item) => options.find((d) => d.label === item)?.label)
          .map((item) => (
            <div
              className='p-2 rounded-sm flex items-center gap-2 bg-gray-50'
              key={item}
            >
              <span className='3xl:text-sm text-xs'> {item}</span>
              <X
                className='size-3 text-gray-500'
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(item);
                }}
              />
            </div>
          ))
      ) : (
        <ExportText />
      );
    } else if (typeof value === 'string') {
      return value ? (
        <span className='3xl:text-sm text-xs'>{value}</span>
      ) : (
        <ExportText />
      );
    }
  };

  const checkSelected = (item: string) => {
    if (multiple && Array.isArray(value)) {
      return value.includes(item);
    } else if (typeof value === 'string') {
      return value === item;
    } else return false;
  };

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
            {renderValue()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-full p-0'>
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
                {searched.map((item) => {
                  return (
                    <CommandItem
                      className={cn(
                        checkSelected(item.label) &&
                          'bg-red-50 text-red-600 rounded-md ',
                        'my-0.5 cursor-pointer focus:'
                      )}
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
