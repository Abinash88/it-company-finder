import { ResponseGetPasswordTypes } from '@/Data/interfaces/password.interface';
import { Checkbox } from '@/front-end-components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

const PasswordColumns: ColumnDef<ResponseGetPasswordTypes>[] = [
  {
    id: 'select',
    size: 50,
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
    size: 50,
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
    header: () => <div className=''>CATEGORY</div>,
    cell: ({ row }) => {
      return <div className=' '>{row.original.catagory}</div>;
    },
  },
  {
    accessorKey: 'password',
    header: () => <div className=''>PASSWORD</div>,
    cell: ({ row }) => {
      return <div className=' '>{row.original.password}</div>;
    },
  },
  {
    accessorKey: 'notes',
    header: () => <div className=''>NOTES</div>,
    cell: ({ row }) => {
      return <div className=' '>{row.original.notes}</div>;
    },
  },
  {
    accessorKey: 'description',
    header: () => <div className=''>DESCRIPTION</div>,
    cell: ({ row }) => {
      return <div className=' '>{row.original.description}</div>;
    },
  },
  {
    accessorKey: 'url',
    header: () => <div className=''>URL</div>,
    cell: ({ row }) => {
      return <div className=' '>{row.original.url}</div>;
    },
  },
];

export default PasswordColumns;
