import { MyAppDataTypes } from '@/Data/Types';
import { Checkbox } from '@radix-ui/react-checkbox';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import React from 'react';

const PasswordColumns: ColumnDef<MyAppDataTypes>[] = [
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
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return <div>Id</div>;
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.original.id}</div>
    ),
  },
  {
    accessorKey: 'name',
    header: () => <div className='text-right'>Name</div>,
    cell: ({ row }) => {
      return (
        <div className='text-right font-medium'>{row.getValue('name')}</div>
      );
    },
  },
];

export default PasswordColumns;