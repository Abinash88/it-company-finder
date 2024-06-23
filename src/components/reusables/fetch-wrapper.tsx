import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Button from '../ui/UiItems';

interface FetchWrapperTypes {
    isError: boolean;
    isLoading: boolean;
    loadingComponent?: React.ReactNode;
    errorComponent?: React.ReactNode;
    isShow?: boolean;
    children: React.ReactNode
}

const FetchWrapper = ({
    isError,
    isLoading,
    loadingComponent,
    errorComponent,
    isShow = false,
    children
}: FetchWrapperTypes) => {

    if (isLoading) return loadingComponent || <Skeleton width={90} height={500} />
    if (isError) return errorComponent || (<div className='w-full h-full flex items-center justify-center'>
        <div className='text-center'>
            <p>  Something went wrong{"... "}</p>
            <Button variant={'link'} className='text-gray-500 font-normal' btnName='Retry'>
                Retry
            </Button>
        </div>
    </div>)
    return children;

}

export default FetchWrapper