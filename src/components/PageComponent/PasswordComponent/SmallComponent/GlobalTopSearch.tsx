import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Div from '@/lib/Div'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'

const GlobalTopSearch = ({
  setText,
  offCheckList = true,
  setIsOpenPopup,
  isOpenPopup,
}: {
  setText?: React.Dispatch<React.SetStateAction<string>>
  offCheckList?: boolean
  setIsOpenPopup?: React.Dispatch<React.SetStateAction<boolean>>
  isOpenPopup: boolean
}) => {
  return (
    <Div>
      <Div className='w-full flex items-center  gap-3 pr-4'>
        {offCheckList && (
          <input
            type='checkbox'
            className='rounded-sm border w-5 h-5 bg-input'
          />
        )}
        <Button
          onClick={() => {
            setIsOpenPopup && setIsOpenPopup(!isOpenPopup)
          }}
          size='sm'
          variant={'default'}
          className='text-[11px] flex gap-2 '
        >
          <span>Add Password</span>
          <FaPlus className='text-[12px] text-gray-60' />
        </Button>
        <Button
          onClick={() => {}}
          size='sm'
          variant={'outline'}
          className='text-[11px] flex gap-2 '
        >
          <span>More</span>
          <FaChevronDown className='text-[12px] text-gray-60' />
        </Button>
        <Div className='flex items-center gap-2'>
          <Input
            onChange={(e) => {
              setText && setText(e.target.value)
            }}
            type='search'
            className='w-[300px] placeholder:text-[11px] bg-white'
            placeholder='Search Password...'
          />
        </Div>
      </Div>
    </Div>
  )
}

export default GlobalTopSearch
