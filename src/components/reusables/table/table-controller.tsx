import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Button from '@/components/ui/UiItems'
import { flexRender } from '@tanstack/react-table'
import React, { useState } from 'react'

interface TableControllerProps {
  table: any
  colums: any
}

const TableController = ({ table, colums }: TableControllerProps) => {
  const [searchTerm, setSearchTerm] = useState( || '')
  return (
    <>
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
                  onClick={addButton.handleClick}
                >
                  {addButton.icon ? (
                    <Icons name={addButton.icon} size={18} color='#fff' />
                  ) : (
                    <PlusIcon size={18} strokeWidth={1.8} className='mx-1' />
                  )}
                  <p className={`${addButton.icon && 'px-2'}`}>
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
                  onClick={() => data.length && setSaveModal(!saveModal)}
                >
                  <Download className='mr-2 h-4 w-4' />
                  Export
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline' className='border-dashed'>
                    Columns <ChevronDownIcon className='ml-2 h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  {table
                    .getAllColumns()
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
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      )
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        }

        <div className='rounded-md border '>
          <Table.Table>
            <Table.TableHeader
              className={cn(skin !== 'dark' && 'bg-[#e3ebf5]')}
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <Table.TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header, headerIdx) => {
                    return (
                      <Table.TableHead
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
                          skin === 'dark' && 'text-white',
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
                      </Table.TableHead>
                    )
                  })}
                </Table.TableRow>
              ))}
            </Table.TableHeader>
            <Table.TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <Table.TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className='hover:bg-secondary'
                    onClick={() => onRowClick && onRowClick(row.original.id)}
                  >
                    {row.getVisibleCells().map((cell, rowIdx) => (
                      <Table.TableCell
                        key={`${row.id}-${rowIdx}`}
                        //@ts-expect-error className row is customized meta
                        className={cell.column?.columnDef?.meta?.classNameRow}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Table.TableCell>
                    ))}
                  </Table.TableRow>
                ))
              ) : (
                <Table.TableRow className='hover:bg-white dark:hover:bg-inherit'>
                  <Table.TableCell
                    colSpan={Number.MAX_SAFE_INTEGER}
                    className='h-24 text-center'
                  >
                    {getContent()}
                  </Table.TableCell>
                </Table.TableRow>
              )}
            </Table.TableBody>
          </Table.Table>
        </div>
        {showPagination && (
          <div
            className={cn(
              ` items-center py-4 ${disablePaginaionFooter.isOpen ? 'hidden' : 'flex'}`
            )}
          >
            <div className='flex-1 whitespace-nowrap text-sm text-muted-foreground'>
              {table.getFilteredSelectedRowModel().rows.length} of{' '}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className='flex justify-end'>
              <Paginator
                table={table}
                currentPage={table.getState().pagination.pageIndex + 1}
                totalPages={table.getPageCount()}
                onPageChange={(pageNumber) =>
                  table.setPageIndex(pageNumber - 1)
                }
                showPreviousNext
              />
            </div>
          </div>
        )}
      </div>
      {saveModal && data?.length && (
        <SaveFile
          isOpen={saveModal}
          toggleModal={setSaveModal}
          fileInfo={fileInfo}
          setFileInfo={setFileInfo}
          onDownload={() =>
            handleDownloadTable({ columns, data, table, file: fileInfo })
          }
        />
      )}
    </>
  )
}

export default TableController
