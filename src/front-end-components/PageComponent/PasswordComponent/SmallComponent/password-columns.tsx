import { ResponseGetPasswordTypes } from '@/Data/interfaces/password.interface';
import { Checkbox } from '@radix-ui/react-checkbox';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

const PasswordColumns: ColumnDef<ResponseGetPasswordTypes>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onClick={(e) => e.stopPropagation()}
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'SN',
    header: 'SN',
    cell: ({ row }) => <div className='capitalize'>{row.index + 1}</div>,
  },
  {
    accessorKey: 'name',
    header: () => {
      return <div>Name</div>;
    },
    cell: ({ row }) => <div className='lowercase'>{row.original.name}</div>,
  },
  {
    accessorKey: 'category',
    header: () => <div className='text-right'>CATEGORY</div>,
    cell: ({ row }) => {
      return (
        <div className='text-right font-medium'>{row.original.createdAt}</div>
      );
    },
  },
  {
    accessorKey: 'password',
    header: () => <div className='text-right'>PASSWORD</div>,
    cell: ({ row }) => {
      return (
        <div className='text-right font-medium'>{row.original.password}</div>
      );
    },
  },
  {
    accessorKey: 'notes',
    header: () => <div className='text-right'>NOTES</div>,
    cell: ({ row }) => {
      return <div className='text-right font-medium'>{row.original.notes}</div>;
    },
  },
  {
    accessorKey: 'description',
    header: () => <div className='text-right'>DESCRIPTION</div>,
    cell: ({ row }) => {
      return (
        <div className='text-right font-medium'>{row.original.description}</div>
      );
    },
  },
  {
    accessorKey: 'url',
    header: () => <div className='text-right'>URL</div>,
    cell: ({ row }) => {
      return (
        <div className='text-right font-medium'>{row.original.url}</div>
      );
    },
  },
];

export default PasswordColumns;
