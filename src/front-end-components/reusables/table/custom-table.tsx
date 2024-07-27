import React, { useState } from 'react';
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { IbtnVariant } from '@/interface-types/interface';
import { Input } from '@/front-end-components/ui/input';
import { ChevronDownIcon, Download, PlusIcon, SearchIcon } from 'lucide-react';
import { Button } from '@/front-end-components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/front-end-components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/front-end-components/ui/table';
import { useTheme } from '../theme-provider';
import EmptyData from '../empty-data';

type TOptions = {
  id: string;
  label: string;
};
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  searchKey?: {
    key: string;
    label: string;
  };
  empty?: {
    title: string;
    subtitle?: string;
    btnAction?: () => void;
    btnLabel?: string;
    btnVariant?: IbtnVariant;
    icon?: string;
  };
  customEmptyLayout?: React.ReactNode;
  floatingBar?: React.ReactNode | null;
  onRowClick?: (id: string) => void;
  showPagination?: boolean;
  filters?: {
    [key: string]:
      | {
          label?: string;
          linked?: string;
          options: TOptions[];
          multiSelect?: boolean;
        }
      | boolean;
  };
  addButton?: {
    label?: string;
    variant?: IbtnVariant;
    className?: string;
    handleClick?: () => void;
    icon?: React.ReactElement;
  };
  extraButtons?: React.ReactNode;
  hideFilterRow?: boolean;
  hideFilterTabs?: boolean;
  hasWritePermission?: boolean;
  hasExport?: boolean;
  hasSearch?: boolean;
  id?: string;
}

const CustomTable = ({
  data,
  columns,
  searchKey,
  empty,
  customEmptyLayout,
  id,
  filters = {
    'Filter 1': {
      options: [
        {
          id: '1',
          label: 'Item 1',
        },
        {
          id: '2',
          label: 'Item 2',
        },
      ],
    },
    'Filter 2': {
      options: [
        {
          id: '1',
          label: 'Item 1',
        },
        {
          id: '2',
          label: 'Item 2',
        },
      ],
    },
  },
  addButton,
  extraButtons,
  hasExport = true,
  hideFilterRow = false,
  hideFilterTabs = false,
  onRowClick,
  showPagination = true,
  hasWritePermission,
}: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnsFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnsVisibility] = useState<VisibilityState>(
    {}
  );
  const [rowSelection, setRowSelection] = useState<VisibilityState>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [saveModal, setSaveModal] = useState(false);
  const { theme } = useTheme();

  const getContent = ():
    | string
    | number
    | true
    | Iterable<React.ReactNode>
    | JSX.Element => {
    if (customEmptyLayout) {
      return customEmptyLayout;
    }

    if (showPagination) {
      return <EmptyData {...empty} hideButton={!hasWritePermission} />;
    }

    return '';
  };

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnsFilters,
    onColumnVisibilityChange: setColumnsVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility: {
        ...columns.reduce((acc, column) => {
          acc[column.id] = !column?.enableHiding;

          return acc;
        }, {} as VisibilityState),
        ...columnVisibility,
      },
      rowSelection,
    },
  });

  return (
    <div>
      <div className='w-full'>
        {
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-4'>
              {searchKey?.key && (
                <div className='flex items-center'>
                  <Input
                    placeholder={`Search by...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    icon={SearchIcon}
                    className='max-w-sm'
                  />
                </div>
              )}
              {
                <Button
                  variant={`${addButton?.variant ? addButton.variant : 'default'}`}
                  className={cn(
                    'flex justify-between items-center align-center',
                    addButton?.className
                  )}
                  icon={
                    addButton?.icon ? (
                      addButton.icon
                    ) : (
                      <PlusIcon size={18} strokeWidth={1.8} className='mx-1' />
                    )
                  }
                  onClick={addButton?.handleClick}
                >
                  <p className={`${addButton?.icon && 'px-2'}`}>
                    {addButton?.label}
                  </p>
                </Button>
              }{' '}
              {extraButtons && hasWritePermission && extraButtons}
              {hasExport && (
                <Button
                  variant={'outline'}
                  className='border-[1px] border-primary'
                  type='button'
                  icon={<Download className='mr-2 h-4 w-4' />}
                  onClick={() => data.length && setSaveModal(!saveModal)}
                >
                  Export
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    icon={<ChevronDownIcon className='ml-2 h-4 w-4' />}
                    variant='outline'
                    className='border-dashed'
                  >
                    Columns
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  {table
                    ?.getAllColumns()
                    .filter(
                      (column) =>
                        column.getCanHide() &&
                        !columns.find((hide) => hide.id === column.id)
                          ?.enableHiding
                    )
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className='capitalize'
                          checked={column.getIsVisible()}
                          onCheckedChange={(value: boolean) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        }

        <div className='rounded-md border '>
          <Table>
            <TableHeader className={cn(theme !== 'dark' && 'bg-[#e3ebf5]')}>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header, headerIdx) => {
                    return (
                      <TableHead
                        key={`${header.id}-${headerIdx}`}
                        colSpan={header.colSpan}
                        style={{
                          width:
                            header.getSize() === Number.MAX_SAFE_INTEGER
                              ? 'auto'
                              : header.getSize(),
                          // @ts-expect-error minWidth is customized meta
                          minWidth: header.column.columnDef.meta?.minWidth,
                        }}
                        className={cn(
                          'text-primary',
                          theme === 'dark' && 'text-white',
                          //@ts-expect-error className column is customized meta
                          header.column?.columnDef?.meta?.className
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className='hover:bg-secondary'
                    onClick={() => onRowClick && onRowClick(row.original.id)}
                  >
                    {row.getVisibleCells().map((cell, rowIdx) => (
                      <TableCell
                        key={`${row.id}-${rowIdx}`}
                        //@ts-expect-error className row is customized meta
                        className={cell.column?.columnDef?.meta?.classNameRow}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className='hover:bg-white dark:hover:bg-inherit'>
                  <TableCell
                    colSpan={Number.MAX_SAFE_INTEGER}
                    className='h-24 text-center'
                  >
                    {getContent()}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {showPagination && (
          <div className={cn(` items-center py-4 `)}>
            <div className='flex-1 whitespace-nowrap text-sm text-muted-foreground'>
              {table.getFilteredSelectedRowModel().rows.length} of{' '}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className='flex justify-end'>
              {/* <Paginator
                table={table}
                currentPage={table.getState().pagination.pageIndex + 1}
                totalPages={table.getPageCount()}
                onPageChange={(pageNumber) =>
                  table.setPageIndex(pageNumber - 1)
                }
                showPreviousNext
              /> */}
            </div>
          </div>
        )}
      </div>
      {/* {saveModal && data?.length && (
        <SaveFile
          isOpen={saveModal}
          toggleModal={setSaveModal}
          fileInfo={fileInfo}
          setFileInfo={setFileInfo}
          onDownload={() =>
            handleDownloadTable({ columns, data, table, file: fileInfo })
          }
        />
      )} */}
    </div>
  );
};

export default CustomTable;
