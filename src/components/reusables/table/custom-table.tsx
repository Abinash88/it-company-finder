import React, { useState } from 'react'
import {
  ColumnFiltersState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
interface CustomTableProps<TData, TValue> {
  columns: _column[]
  data: TData[]
}

const CustomTable = <TData, TValue>({
  columns,
  data,
}: CustomTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnsFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnsVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState<VisibilityState>({})

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnsFilters,
    onColumnVisibilityChange: setColumnsVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility: {
        ...columns.reduce((acc, column) => {
          acc[column.id] = !column?.enableHiding

          return acc
        }, {} as VisibilityState),
        ...columnVisibility,
      },
      rowSelection,
    },
  })
  return( <div>
    
  </div>)
}

export default CustomTable
