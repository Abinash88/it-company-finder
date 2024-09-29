import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Button } from '../ui/button';

interface FetchWrapperTypes {
  isError: boolean;
  isLoading: boolean;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
  isShow?: boolean;
  children: React.ReactNode;
  refetch?: () => void;
}

const FetchWrapper = ({
  isError,
  isLoading,
  loadingComponent,
  errorComponent,
  refetch,
  children,
}: FetchWrapperTypes) => {
  if (isLoading)
    return loadingComponent || <Skeleton width={90} height={500} />;
  if (isError)
    return (
      errorComponent || (
        <div className='w-full h-full flex items-center justify-center'>
          <div className='text-center'>
            <p> Something went wrong{'... '}</p>
            <Button
              onClick={() => {
                refetch && refetch();
              }}
              variant={'link'}
              className='text-gray-500 font-normal'
            >
              Retry
            </Button>
          </div>
        </div>
      )
    );
  return children;
};

export default FetchWrapper;
